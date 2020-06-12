const axios = require('axios');

describe('API Routes', () => {
  describe('GET /api/posts', () => {
    // - should have a 200 status code
    it('should have a 200 status code', async () => {
      // make a get request & capture the response
      const { status } = await axios.get('/api/posts');

      // expect the response.status to be 200
      expect(status).toBe(200);
    });

    it('should have a 200 status code', async () => {
      // make a get request & capture the response
      const { status } = await axios.get('/api/posts/:id');

      // expect the response.status to be 200
      expect(status).toBe(200);
    });

  });

  //API routes for replies
  describe('GET /api/replies', () => {
    // - should have a 200 status code
    it('should have a 200 status code', async () => {
      // make a get request
      // capture the response
      const { status } = await axios.get('/api/replies');
      // expect the response.status to be 200
      expect(status).toBe(200);

    });

    // });
    it('should have a 200 status code', async () => {
      // make a get request & capture the response
      const { status } = await axios.get('/api/replies/:id');

      // expect the response.status to be 200
      expect(status).toBe(200);
    });

  });

});

