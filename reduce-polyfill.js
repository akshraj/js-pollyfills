//polyfill for reduce method

Array.prototype.myReduce = function (cb, initialVal) {
  let accumulator = initialVal;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const nums = [1, 2, 3, 4, 5];

const sum = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);