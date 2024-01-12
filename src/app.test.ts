import request from 'supertest';
import app from './app';
//prettier-ignore
describe('GET /', () => {
  it('responds with a JSON message', (done) => {
    request(app).get('/')
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
//prettier-ignore
describe('Middleware Tests', () => {
  // Test for CORS
  it('should allow cross-origin requests', async () => {
    const response = await request(app).get('/')
.set('Origin', 'http://example.com');

    expect(response.headers['access-control-allow-origin']).toBe('*'); // Update this based on your CORS config
  });

  // Test for Helmet
  it('should have security headers set by Helmet', async () => {
    const response = await request(app).get('/');

    expect(response.headers['x-dns-prefetch-control']).toBeDefined();
    expect(response.headers['strict-transport-security']).toBeDefined();
    expect(response.headers['x-frame-options']).toBeDefined();
    expect(response.headers['x-download-options']).toBeDefined();
    expect(response.headers['x-content-type-options']).toBeDefined();
    expect(response.headers['x-xss-protection']).toBeDefined();
    expect(response.headers['referrer-policy']).toBeDefined();
  });
});
