import {handlerRequest} from './index';

describe('Worker', () => {
  it('should return 200 response', async () => {
    const db: D1Database = {
      prepare: jest.fn().mockReturnValue({
        all: jest.fn().mockReturnValue({
          results: [
            {id: 1, name: 'foo'},
            {id: 2, name: 'bar'},
            {id: 3, name: 'baz'},
            {id: 4, name: 'qux'},
            {id: 5, name: 'quux'},
            {id: 6, name: 'corge'},
            {id: 7, name: 'grault'},
          ],
        }),
      }),
      batch: jest.fn(),
      dump: jest.fn(),
      exec: jest.fn(),
    };

    const resp = await handlerRequest(db);

    expect(resp.status).toBe(200);
    const body = await resp.json();
    expect(body['categories']).toHaveLength(7);
  });
});
