import {GetCategoryQuestions200Response} from '@openapi';
import {QuestionRepository} from '../../../questions';

export interface Env {
  TAEHOIO_DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async context => {
  const db = context.env.TAEHOIO_DB;
  const categoryId = Number(context.params.categoryId);
  if (isNaN(categoryId)) {
    return Response.json({msg: 'categoryId is not a number'}, {status: 400});
  }

  const questionRepository = new QuestionRepository(db);
  const questions = await questionRepository.findByCategoryId(categoryId);

  return Response.json({questions} as GetCategoryQuestions200Response);
};
