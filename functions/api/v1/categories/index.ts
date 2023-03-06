export interface Env {
  TAEHOIO_DB: D1Database;
}

export const onRequest: PagesFunction<Env> = async context => {
  const ps = context.env.TAEHOIO_DB.prepare('SELECT * FROM category');
  const data = await ps.all();

  return Response.json(data);
};
