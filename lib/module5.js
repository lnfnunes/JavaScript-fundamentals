module.exports.exercise1 = function exercise1() {
  var __value_ = 0;
  var Counter = function(value) {
    __value_ = value;
  }

  Counter.prototype.getValue = function () {
    return __value_;
  };

  return { Counter: Counter };
};

module.exports.exercise2 = function exercise2() {
  var __value_ = 0;
  var Counter = function(value) {
    __value_ = value;
  }

  Counter.prototype.getValue = function () {
    return __value_;
  };

};
