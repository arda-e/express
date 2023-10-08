import request from 'supertest';
import app from '../../app';

// prettier-ignore
describe('Users API', () => {
  it('should return a list of users', (done) => {
    request(app)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          data: [
            { id: 1, name: 'John Doe', email: 'jdoe@test.com' },
            { id: 2, name: 'Jane Doe', email: 'janedoe@test.com' },
          ],
        },
        done,
      );
  });
});
