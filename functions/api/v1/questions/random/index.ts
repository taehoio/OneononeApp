import {Question} from '@openapi';
import {QuestionRepository} from '..';

export interface Env {
  TAEHOIO_DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async context => {
  const db = context.env.TAEHOIO_DB;

  const questions = await new QuestionRepository(db).list();

  if (!questions.length) {
    return Response.json({message: 'question not found'}, {status: 404});
  }

  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];

  return Response.json({
    question: randomQuestion,
  } as {question: Question});
};
