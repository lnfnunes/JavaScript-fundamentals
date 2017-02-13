var expect = require('chai').expect;
var module5 = require('./cheat')('module5');

var solution1 = module5.exercise1();
var solution2 = module5.exercise2();

// Tests
describe('Module5/Exercise1', function () {
  it('Should return counter value through #getValue', function () {
    var counter = new solution1.Counter(0);
    expect(counter.getValue()).to.be.eq(0);
  });
});

describe('Module5/Exercise2', function () {
  it('Should increment values through #increment', function () {
    var counterA = new solution2.Counter(0);
    var counterB = new solution2.Counter(10);

    counterA.increment();
    expect(counterA.getValue()).to.be.eq(1);

    counterB.increment();
    expect(counterB.getValue()).to.be.eq(11);
  });

  it('Should increment values through #decrement', function () {
    var counterA = new solution2.Counter(0);
    var counterB = new solution2.Counter(10);

    counterA.decrement();
    expect(counterA.getValue()).to.be.eq(-1);

    counterB.decrement();
    expect(counterB.getValue()).to.be.eq(9);
  });
});
