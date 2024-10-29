const sumAll = function (int1, int2) {
  if (int1 < 0
    || int2 < 0
    || !Number.isInteger(int1)
    || !Number.isInteger(int2)) {
    return 'ERROR';
  }

  if (int1 === int2) {
    return int1;
  }

  let min = int1 <= int2 ? int1 : int2;
  let max = int2 > int1 ? int2 : int1;

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
