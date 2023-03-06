import {Env, onRequestGet, QuestionRepository} from '.';

describe('/questions', () => {
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
      } as unknown as EventContext<Env, any, Record<string, unknown>>);

      expect(resp.status).toBe(200);
      const body = await resp.json();
      expect(body['questions']).toHaveLength(2);
    });
  });
});

describe('QuestionRepository', () => {
  describe('findByCategoryId', () => {
    it('should succeeded to return questions', async () => {
      const db: D1Database = {
        prepare: jest.fn().mockReturnValue({
          bind: jest.fn().mockReturnThis(),
          all: jest.fn().mockReturnValue({
            results: [
              {
                id: 306,
                question: 'If you were me, what changes would you make?',
              },
              {id: 307, question: 'How do you prefer to receive feedback?'},
              {
                id: 308,
                question:
                  'Do you feel you’re getting enough feedback? Why/why not?',
              },
              {
                id: 309,
                question:
                  'What aspect of your job you would like more help or coaching?',
              },
              {id: 310, question: 'How can I better support you?'},
              {
                id: 311,
                question:
                  'What could I do as a manager to make your work easier?',
              },
              {
                id: 312,
                question:
                  'What is something I could do better? What feedback do you have for me?',
              },
              {
                id: 313,
                question:
                  'What aspects of your work would you like more or less direction from me?',
              },
            ],
          }),
        }),
      } as unknown as D1Database;

      const questionRepository = new QuestionRepository(db);
      const questions = await questionRepository.findByCategoryId(1);
      expect(questions).toHaveLength(8);
    });
  });
});
