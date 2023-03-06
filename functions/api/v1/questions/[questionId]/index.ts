import {Question} from '@openapi';
import {QuestionRepository} from '..';

export interface Env {
  TAEHOIO_DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async context => {
  const db = context.env.TAEHOIO_DB;
  const questionId = Number(context.params.questionId);
  if (isNaN(questionId)) {
    return Response.json(
      {message: 'questionId is not a number'},
      {status: 400},
    );
  }

  const question = await new QuestionRepository(db).get(questionId);

  return Response.json({question} as {question: Question});
};
