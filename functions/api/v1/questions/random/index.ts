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
