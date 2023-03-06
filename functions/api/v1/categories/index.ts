import {Category, GetCategories200Response} from '@openapi';

export interface Env {
  TAEHOIO_DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async context => {
  const db = context.env.TAEHOIO_DB;

  const categoryRepository = new CategoryRepository(db);
  const categories = await categoryRepository.list();

  return Response.json({categories} as GetCategories200Response);
};

export class CategoryRepository {
  constructor(private db: D1Database) {}

  async list(): Promise<Category[]> {
    const ps = this.db.prepare('SELECT * FROM category');
    const {results} = await ps.all();

    const categories = results.map((category: Category) => {
      return {id: category.id, name: category.name};
    });

    return categories;
  }
}
