module.exports.exercise1 = function exercise1() {
  var Counter = function(value) {
    var _value = value || 0;
    var _changeValueBy = function _changeValueBy(n) {
      _value += Number(n);
    };

    return {
      getValue: function () {
        return _value;
      }
    };
  };

  return Counter;
};

module.exports.exercise2 = function exercise2() {
  var Counter = function(value) {
    var _value = value || 0;
    var _changeValueBy = function _changeValueBy(n) {
      _value += Number(n);
    };

    return {
      getValue: function () {
        return _value;
      },

      increment: function () {
        _changeValueBy(1);
      },

      decrement: function () {
        _changeValueBy(-1);
      }
    };
  };

  return Counter;
};
