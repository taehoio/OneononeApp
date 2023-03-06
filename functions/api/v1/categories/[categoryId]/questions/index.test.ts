import {Env, onRequestGet} from '.';
import {QuestionRepository} from '../../../questions';

describe('/categories/[categoryId]/questions', () => {
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
        .spyOn(QuestionRepository.prototype, 'findByCategoryId')
        .mockResolvedValueOnce(questions);

      const resp = await onRequestGet({
        params: {categoryId: '0'},
        env: {TAEHOIO_DB: {}},
      } as unknown as EventContext<Env, any, Record<string, unknown>>);

      expect(resp.status).toBe(200);
      expect(await resp.json()).toEqual({questions});
    });

    it('should return 400 response', async () => {
      const resp = await onRequestGet({
        params: {categoryId: 'a'},
        env: {TAEHOIO_DB: {}},
      } as unknown as EventContext<Env, any, Record<string, unknown>>);

      expect(resp.status).toBe(400);
      expect(await resp.json()).toEqual({
        message: 'categoryId is not a number',
      });
    });
  });
});
