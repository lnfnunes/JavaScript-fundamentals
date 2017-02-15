module.exports = function(name) {
  if (process.argv.includes('--cheat')) {
    return require('../lib/solutions/' + name + '.js');
  } else {
    return require('../lib/' + name + '.js');
  }
};
