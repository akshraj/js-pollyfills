Array.prototype.myReduceRight = function (cb, initialVal) {
  let result;
  let startIndex = this.length - 1;
  if (arguments.length <= 1) {
    result = this[this.length - 1];
    startIndex = this.length - 2;
  }

  if (arguments.length >= 2) {
    result = initialVal;
  }

  for (let i = startIndex; i >= 0; i--) {
    result = cb(result, this[i]);
  }

  return result;
}