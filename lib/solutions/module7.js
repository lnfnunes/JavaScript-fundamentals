module.exports.exercise1 = function exercise1() {
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return numbers.map(function(x) {
    return x * 2;
  });
};

module.exports.exercise2 = function exercise2() {
  return [0, 4, 16, 49].map(Math.sqrt);
};

module.exports.exercise3 = function exercise3() {
  return ['1','5','7'].map(Number);
};

module.exports.exercise4 = function exercise4() {
  function isBigEnough(value) {
    return value >= 10;
  }
  return [0, 50, 11, 10.1, 7, 20].filter(isBigEnough);
};

module.exports.exercise5 = function exercise5() {
    var students = [
        {                
          name: 'John',  
          lastName: 'Doe',
          grade: 10
        },
        {                
          name: 'John',  
          lastName: 'Jefferson',
          grade: 5
        },
        {                
          name: 'John',  
          lastName: 'Michel',
          grade: 7
        },
        {                
          name: 'John',  
          lastName: 'Meek',
          grade: 3
        },
        {                
          name: 'John',  
          lastName: 'Block',
          grade: 8
        },
        {                
          name: 'John',  
          lastName: 'Harty',
          grade: 9
        },
        {                
          name: 'John',  
          lastName: 'Matz',
          grade: 6.9
        },
        {                
          name: 'John',  
          lastName: 'Dana',
          grade: 7.1
        }
    ];                    

    function isApproved(value) {
      return value.grade >= 7;
    }

    function getFullName(value){
      return {
        fullName: value.name + ' ' + value.lastName
      }    
    }

    return students
      .filter(isApproved)
      .map(getFullName);
};

module.exports.exercise6 = function exercise6() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 99, 93, 100, 500, 698];
  return numbers.reduce(function(a, b) {
    return a + b;
  }, 0);
};

module.exports.exercise7 = function exercise7() {
  var arrItems = [[0, 1], [2, 3], [4, 5]];
  return arrItems.reduce(function(a, b) {
    return a.concat(b);
  }, []);
};
