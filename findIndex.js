const arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myFindIndex = function () {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return i;
    }
  }
  return -1;
}