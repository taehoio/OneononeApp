import client from './client';

export async function listCategories() {
  const resp = await client.get('/categories');
  return resp.data;
}

export async function getQuestion(id) {
  const resp = await client.get(`/questions/${id}`);
  return resp.data;
}

export async function listQuestionsByCategoryId(categoryId) {
  const resp = await client.get(`/categories/${categoryId}/questions`);
  return resp.data;
}

export async function getRandomQuestionByCategoryId(categoryId) {
  const resp = await client.get(`/categories/${categoryId}/questions/random`);
  return resp.data;
}
