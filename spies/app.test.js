const sinon = require('sinon');
const chai = require('chai');
chai.use(require('sinon-chai'));

const db = require('./db');
const app = require('./app');

describe('App', () => {
  it('should call the spy correctly', () => {
    const spy = sinon.spy();
    spy('Aki', 23);
    chai.expect(spy).to.have.been.calledWithExactly('Aki', 23);
  });
  it('should call saveUser with user object', () => {
    const spy = sinon.spy(db, 'saveUser');
    const email = 'aki@gao.io';
    const password = 'good4u';
    app.handleSignup(email, password);
    chai.expect(spy).to.have.been.calledWith({
      email: 'aki@gao.io',
      password: 'good4u'
    });
  });
});
