import {Env, onRequestGet} from '.';
import {QuestionRepository} from '..';

describe('/categories/[categoryId]/questions/[questionId]', () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('onRequestGet', () => {
    it('should return 200 response', async () => {
      const questions = [
        {
          id: 306,
          question: 'If you were me, what changes would you make?',
        },
        {id: 307, question: 'How do you prefer to receive feedback?'},
      ];

      jest
        .spyOn(QuestionRepository.prototype, 'list')
        .mockResolvedValueOnce(questions);

      const resp = await onRequestGet({
        env: {TAEHOIO_DB: {}},
        params: {questionId: '0'},
      } as unknown as EventContext<Env, any, Record<string, unknown>>);

      expect(resp.status).toBe(200);
      const body = await resp.json();
      expect(body).toHaveProperty('question');
    });

    it('should return 404 response', async () => {
      const questions = [];

      jest
        .spyOn(QuestionRepository.prototype, 'list')
        .mockResolvedValueOnce(questions);

      const resp = await onRequestGet({
        params: {questionId: '0'},
        env: {TAEHOIO_DB: {}},
      } as unknown as EventContext<Env, any, Record<string, unknown>>);

      expect(resp.status).toBe(404);
      expect(await resp.json()).toEqual({message: 'question not found'});
    });
  });
});
