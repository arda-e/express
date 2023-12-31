import request from 'supertest';

import app from '../app';

// prettier-ignore
describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          message: 'API - Root',
        },
        done,
      );
  });
});
