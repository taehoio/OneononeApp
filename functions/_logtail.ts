import {Logtail} from '@logtail/edge';

export const logtail: PagesFunction<{
  LOGTAIL_SOURCE_TOKEN: string;
  ENVIRONMENT: string;
}> = async context => {
  if (!context.env.LOGTAIL_SOURCE_TOKEN) {
    return await context.next();
  }

  const logger = new Logtail(
    context.env.LOGTAIL_SOURCE_TOKEN!,
  ).withExecutionContext(context);

  const {request, env} = context;

  const now = performance.now();
  const response = await context.next();
  const elapsed = performance.now() - now;
  const {origin, pathname} = new URL(request.url);

  logger.info('', {
    dt: new Date().toISOString(),
    environment: env.ENVIRONMENT,
    service: '1on1',
    type: 'access',
    request: {
      url: request.url,
      origin,
      pathname,
      method: request.method,
      headers: Object.fromEntries(request.headers.entries()),
      cf: 'cf' in request ? request.cf : null,
    },
    response: {
      status_code: response.status,
      headers: Object.fromEntries(response.headers.entries()),
    },
    elapsed_ms: elapsed,
  });

  return response;
};

export const onRequest = [log];
