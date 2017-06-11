const request = require('supertest');
const chai = require('chai');

const app = require('./server').app;

it('should return hello world response', done => {
  request(app)
    .get('/')
    .expect(404)
    .expect(res => {
      chai.expect(res.body).to.include({
        error: 'Page not found.'
      });
    })
    .end(done);
});

it('should return my user object', done => {
  request(app)
    .get('/users')
    .expect(200)
    .expect(res => {
      chai.expect(res.body).to.deep.include({
        name: 'Aki',
        age: '23'
      });
    })
    .end(done);
});
