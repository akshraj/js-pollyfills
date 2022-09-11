const arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myFindLast = function () {
  for (let i = this.length; i >= 0; i--) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
};