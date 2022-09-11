const arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.at(-1); //output should be 8


Array.prototype.myAt = function (index) {
  if (index > 0) {
    return this[index];
  } else {
    return this[this.length + index];
  }
}