const { binary_search, testCase: binary_search_testCase } = require('./algorithm/binary_search.js');
const { test_runner } = require('./test_runner');

console.log('hi')
test_runner(binary_search, binary_search_testCase)