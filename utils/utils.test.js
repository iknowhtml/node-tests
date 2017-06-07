const utils = require('./utils');
const { expect } = require('chai');

it('should add two numbers', () => {
  const res = utils.add(33, 11);
  expect(res).to.equal(44).to.be.a('number');
});

it('should square a number', () => {
  const res = utils.square(3);
  expect(res).to.equal(9).to.be.a('number');
});

it('should verify first and last name are set', () => {
  let user = { location: 'Virginia', age: 23 };
  const res = utils.setName(user, 'Aki Gao');
  expect(res).to.deep.include({
    firstName: 'Aki',
    lastName: 'Gao'
  });
});

// it('should expect some values', () => {
//   // expect(12).to.not.equal(12);
//   // expect({name: 'Aki'}).to.deep.equal({name: 'Aki'});
//   expect({
//     name: 'Aki',
//     age: '23',
//     location: 'Virginia',
//   }).to.deep.include({ age: '23' });
// });
