import {Env, onRequestGet} from '.';
import {QuestionRepository} from '..';

describe('/categories/[categoryId]/questions/[questionId]', () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('onRequestGet', () => {
    it('should return 200 response', async () => {
      const question = {
        id: 307,
        question: 'How do you prefer to receive feedback?',
      };

      jest
        .spyOn(QuestionRepository.prototype, 'get')
        .mockResolvedValueOnce(question);

      const resp = await onRequestGet({
        env: {TAEHOIO_DB: {}},
        params: {questionId: '0'},
      } as unknown as EventContext<Env, any, Record<string, unknown>>);

      expect(resp.status).toBe(200);
      const body = await resp.json();
      expect(body).toEqual({question});
    });
  });
});
