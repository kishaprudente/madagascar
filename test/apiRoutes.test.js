const axios = require('axios');


//Two GET Tests for api/post and api/replies
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

  //Two POST Tests for api/post and api/replies
  describe('API Routes', () => {
    describe('POST Endpoints', () => {
      it('should create a new reply', async ()=> {
        const { status } = await axios.post('/api/replies',
          {
            response: 'Test Jest Post',
            post:'5ee1a85254d653c1078a5932'
          });
        expect(status).toBe(200);
        console.log(status);
      });
    });
    describe('POST Endpoints', () => {
      it('should create a new post', async ()=> {
        const { status } = await axios.post('/api/post',
          {
            mood: 'Test Jest Post',
            post:'5ee1a85254d653c1078a5932',
            date: '2020-06-11 23:35:10.588Z',
            sent: 'false',
            reply: '5ee27130a90b1edeed22fbd9'
          });
        expect(status).toBe(200);
        console.log(status);
      });
    });
  });

});
