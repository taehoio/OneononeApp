import {Category, GetCategories200Response} from '@openapi';

export interface Env {
  TAEHOIO_DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async context => {
  const db = context.env.TAEHOIO_DB;
  return handlerRequest(db);
};

export async function handlerRequest(db: D1Database): Promise<Response> {
  const ps = db.prepare('SELECT * FROM category');
  const {results} = await ps.all();

  const categories = results.map((category: Category) => {
    return {id: category.id, name: category.name};
  });

  return Response.json({categories} as GetCategories200Response);
}
