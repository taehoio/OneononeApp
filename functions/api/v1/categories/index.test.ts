import {CategoryRepository, Env, onRequestGet} from '.';

describe('/categories', () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('onRequestGet', () => {
    it('should return 200 response', async () => {
      const categories = [
        {
          id: 0,
          name: 'About Manager',
        },
        {
          id: 1,
          name: 'Career development',
        },
        {
          id: 2,
          name: 'Conversation starters',
        },
      ];

      jest
        .spyOn(CategoryRepository.prototype, 'list')
        .mockResolvedValueOnce(categories);

      const resp = await onRequestGet({
        env: {TAEHOIO_DB: {}},
      } as unknown as EventContext<Env, any, Record<string, unknown>>);

      expect(resp.status).toBe(200);
      const body = await resp.json();
      expect(body['categories']).toHaveLength(3);
    });
  });
});

describe('CategoryRepository', () => {
  describe('list', () => {
    it('should return categories', async () => {
      const db: D1Database = {
        prepare: jest.fn().mockReturnValue({
          all: jest.fn().mockReturnValue({
            results: [
              {
                id: 0,
                name: 'About Manager',
              },
              {
                id: 1,
                name: 'Career development',
              },
              {
                id: 2,
                name: 'Conversation starters',
              },
            ],
          }),
        }),
      } as unknown as D1Database;

      const categoryRepository = new CategoryRepository(db);
      const categories = await categoryRepository.list();
      expect(categories).toHaveLength(3);
    });
  });
});
