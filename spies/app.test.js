const sinon = require('sinon');
const chai = require('chai');
chai.use(require('sinon-chai'));

const app = require('./app');
const db = require('./db');


describe('App', () => {
  it('should call the spy correctly', () => {
    const spy = sinon.spy();
    spy('Aki', 23);
    chai.expect(spy).to.have.been.calledWithExactly('Aki', 23);
  });
  it('should call saveUser with user object', () => {
    const spy = sinon.spy(db);
  });
});
