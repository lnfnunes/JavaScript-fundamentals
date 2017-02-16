var expect = require('chai').expect;
var module7 = require('./cheat')('module7');

var solution1 = module7.exercise1();
var solution2 = module7.exercise2();
var solution3 = module7.exercise3();
var solution4 = module7.exercise4();
var solution5 = module7.exercise5();
var solution6 = module7.exercise6();
var solution7 = module7.exercise7();

describe('Module7/Exercise1', function () {
  it('Should return [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]', function () {
    expect(solution1).to.eql([0, 2, 4, 6, 8, 10, 12, 14, 16, 18]);
  });
});

describe('Module7/Exercise2', function () {
  it('Should return [0, 2, 4, 7]', function () {
    expect(solution2).to.eql([0, 2, 4, 7]);
  });
});

describe('Module7/Exercise3', function () {
  it('Should return [1, 5, 7]', function () {
    expect(solution3).to.eql([1, 5, 7]);
  });
});

describe('Module7/Exercise4', function () {
  it('Should return [50, 11, 10.1, 20]', function () {
    expect(solution4).to.eql([50, 11, 10.1, 20]);
  });
});

describe('Module7/Exercise5', function () {
  it(`Should return 5 students: [
      { fullName: 'John Doe' },
      { fullName: 'John Michel' },
      { fullName: 'John Block' },
      { fullName: 'John Harty' },
      { fullName: 'John Dana' }
    ]`, function () {

    expect(solution5).to.eql([
      { fullName: 'John Doe' },
      { fullName: 'John Michel' },
      { fullName: 'John Block' },
      { fullName: 'John Harty' },
      { fullName: 'John Dana' },
    ]);
  });
});

describe('Module7/Exercise6', function () {
  it(`Should return 1610`, function () {
    expect(solution6).to.be.equal(1610);
  });
});

describe('Module7/Exercise7', function () {
  it(`Should return [0, 1, 2, 3, 4, 5]`, function () {
    expect(solution7).to.eql([0, 1, 2, 3, 4, 5]);
  });
});
