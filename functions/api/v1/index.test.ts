import {onRequestGet, onRequestHead} from '.';

describe('/', () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('onRequestHead', () => {
    it('should return 200 response', async () => {
      const resp = await onRequestHead(
        {} as unknown as EventContext<any, any, Record<string, unknown>>,
      );

      expect(resp.status).toBe(200);
    });
  });

  describe('onRequestGet', () => {
    it('should return 200 response', async () => {
      const resp = await onRequestGet(
        {} as unknown as EventContext<any, any, Record<string, unknown>>,
      );

      expect(resp.status).toBe(200);
      expect(await resp.json()).toEqual({status: 'OK'});
    });
  });
});
