export default class Logtail {
  private logtailApiURL = 'https://in.logtail.com/';
  private workerId: string;
  private workerStartTime: string;

  constructor() {
    this.workerStartTime = new Date().toISOString();
    this.workerId = this.generateId(6);
  }

  private generateId(len: number): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789';
    for (let i = 0; i < len; i += 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  private metadataFromHeaders(headers: Headers): Record<string, string> {
    const metadata = {};
    Array.from(headers).forEach(([key, value]) => {
      metadata[key] = value;
    });
    return metadata;
  }

  public middleware = async (
    context: EventContext<unknown, any, unknown>,
  ): Promise<Response> => {
    const sourceToken = context.env?.['LOGTAIL_SOURCE_TOKEN'];
    const environment = context.env?.['ENVIRONMENT'];
    if (!sourceToken || !environment) {
      return context.next();
    }

    const {request} = context;
    const response = await context.next();

    const cf = request.cf;
    delete cf.tlsClientAuth;
    delete cf.tlsExportedAuthenticator;

    const log = JSON.stringify({
      dt: new Date().toISOString(),
      metadata: {
        cloudflare_worker: {
          environment: environment,
          worker_id: this.workerId,
          worker_start_time: this.workerStartTime,
        },
        request: {
          url: request.url,
          method: request.method,
          headers: this.metadataFromHeaders(request.headers),
          cf: cf,
        },
        response: {
          headers: this.metadataFromHeaders(response.headers),
          status_code: response.status,
        },
      },
    });

    const requestToLogtail = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${context.env['LOGTAIL_SOURCE_TOKEN']}`,
        'Content-Type': 'application/json',
      },
      body: log,
    };

    context.waitUntil(fetch(this.logtailApiURL, requestToLogtail));

    return response;
  };
}
