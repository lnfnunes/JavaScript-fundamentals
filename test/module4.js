var expect = require('chai').expect;
var module4 = require('./cheat')('module4');

var solution1 = module4.exercise1();
var solution2 = module4.exercise2();

// Shared
var doHumanTests = function (Human) {
  it('should have name', function () {
    expect(Human).to.have.property('name');
  });

  it('should have age', function (Human) {
    expect(Human).to.have.property('age');
  });
};

// Tests
describe('Module4/Exercise1', function () {
  describe('Human', function() {
    doHumanTests(solution1.Human);
  });
});

describe('Module4/Exercise2', function () {
  describe('SuperHuman', function () {
    doHumanTests(solution2.SuperHuman);

    it('should have a powerType', function () {
      expect(solution2.SuperHuman).to.have.property('powerType');
    });

    it('should have a strength', function () {
      expect(solution2.SuperHuman).to.have.property('strength');
    });
  });
});

describe('Module4/Exercise3', function () {

});

describe('Module4/Exercise4', function () {

});

describe('Module4/Exercise5', function () {

});

describe('Module4/Exercise6', function () {

});

describe('Module4/Exercise7', function () {

});
