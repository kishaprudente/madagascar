const axios = require('axios');

describe('Server', () => {
  it('should deliver a staus code if the server is running', async () => {
    try {
      const { status } = await axios.get('/hello');
      expect(status).not.toBe(undefined);
    } catch (err) {
      const { status } = err.response;
      expect(status).not.toBe(undefined);
    }
  });
});