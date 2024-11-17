const fibonacci = function (n) {
  // Returns the number in fibonacci series
  if (n == 0) {
    return 0;
  }
  if (n < 0) {
    return 'OOPS';
  }
  let prev = 0;
  let curr = 1;
  let tempCurr;
  for (let i = 1; i < n; i++) {
    tempCurr = curr;
    curr += prev;
    prev = tempCurr;
  }
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
