import request from 'supertest';

import app from './app';

// prettier-ignore
describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
    .get('/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(
      200,
      {
        message: 'Welcome to Express API',
      },
      done,
    );
  });
});
