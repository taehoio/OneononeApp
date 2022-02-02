import client from './client';

export async function listCategories() {
  const resp = await client.get('/categories');
  return resp.data;
}
