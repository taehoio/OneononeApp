import {GetCategoryRandomQuestion200Response, Question} from '@openapi';
import {QuestionRepository} from '../../../../questions';

export interface Env {
  TAEHOIO_DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async context => {
  const db = context.env.TAEHOIO_DB;
  const categoryId = Number(context.params.categoryId);
  if (isNaN(categoryId)) {
    return Response.json(
      {message: 'categoryId is not a number'},
      {status: 400},
    );
  }

  const categoryQuestions = new QuestionRepository(db);
  const questions = await categoryQuestions.findByCategoryId(categoryId);

  if (!questions.length) {
    return Response.json({message: 'question not found'}, {status: 404});
  }

  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];

  return Response.json({
    question: randomQuestion,
  } as GetCategoryRandomQuestion200Response);
};
