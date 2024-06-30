import honeycombPlugin from '@cloudflare/pages-plugin-honeycomb';

import Logtail from './_logtail';

const honeycomb = (
  context: EventContext<
    {HONEYCOMB_API_KEY: string; HONEYCOMB_DATASET: string},
    any,
    Record<string, unknown>
  >,
) => {
  return honeycombPlugin({
    apiKey: context.env.HONEYCOMB_API_KEY,
    dataset: context.env.HONEYCOMB_DATASET,
  })(context);
};

// Respond to OPTIONS method.
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Max-Age': '86400',
    },
  });
};

const setCORSHeaders = async (
  context: EventContext<unknown, any, unknown>,
): Promise<Response> => {
  const response = await context.next();
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Max-Age', '86400');
  return response;
};

const logtail = new Logtail();

// Chain middlewares To all responses.
export const onRequest = [setCORSHeaders];
