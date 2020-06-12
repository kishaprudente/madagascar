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

  });

  describe('GET /api/replies', () => {
    // - should have a 200 status code
    it('should have a 200 status code', async () => {
      // make a get request & capture the response
      const { status } = await axios.get('/api/replies');
      // expect the response.status to be 200
      expect(status).toBe(200);
    });

  });
});

describe('API Routes', () => {
  describe('POST Endpoints', () => {
    it('should create a new post', async ()=> {
      const { status } = await axios.post('/api/replies',
        {
          response: 'Feel Better',
          post:'5ee1a85254d653c1078a5932'
        });
      expect(status).toBe(200);
      console.log(status);
    });
  });


 
});