const { sum } = require('test-tmp-nucleus');

if (sum(1, 2) === 3) {
  process.exit(0);
} else {
  console.log('wrong sum');
  process.exit(1);
}

