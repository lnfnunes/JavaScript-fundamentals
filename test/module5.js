var expect = require('chai').expect;
var module5 = require('./cheat')('module5');

describe('Module5/Exercise1', function () {
  var Counter = module5.exercise1();

  it('Should return counter value through #getValue', function () {
    var counter = new Counter();
    expect(counter.getValue()).to.be.eq(0);
  });
});

describe('Module5/Exercise2', function () {
  var Counter = module5.exercise2();

  it('Should increment values through #increment', function () {
    var counterA = new Counter();
    var counterB = new Counter(10);

    counterA.increment();
    expect(counterA.getValue()).to.be.eq(1);

    counterB.increment();
    expect(counterB.getValue()).to.be.eq(11);
  });

  it('Should increment values through #decrement', function () {
    var counterA = new Counter(0);
    var counterB = new Counter(10);

    counterA.decrement();
    expect(counterA.getValue()).to.be.eq(-1);

    counterB.decrement();
    expect(counterB.getValue()).to.be.eq(9);
  });
});
