import {Question} from '@openapi';

export interface Env {
  TAEHOIO_DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async context => {
  const db = context.env.TAEHOIO_DB;

  const questionRepository = new QuestionRepository(db);
  const questions = await questionRepository.list();

  return Response.json({questions} as {questions: Question[]});
};

export class QuestionRepository {
  constructor(private db: D1Database) {}

  async get(id: number): Promise<Question> {
    const question = await this.db
      .prepare(
        'SELECT question.id, question.question FROM question WHERE id = ?',
      )
      .bind(id)
      .first();

    return question as Question;
  }

  async list(): Promise<Question[]> {
    const {results} = await this.db
      .prepare('SELECT question.id, question.question FROM question')
      .all();

    const questions = results.map((question: Question) => {
      return {id: question.id, question: question.question} as Question;
    });

    return questions as Question[];
  }

  async findByCategoryId(categoryId: number): Promise<Question[]> {
    const {results} = await this.db
      .prepare(
        `SELECT question.id, question.question
          FROM category_question
          LEFT JOIN question
            ON category_question.question_id = question.id
          WHERE category_id = ?`,
      )
      .bind(categoryId)
      .all();

    const questions = results.map((question: Question) => {
      return {id: question.id, question: question.question} as Question;
    });

    return questions;
  }
}
