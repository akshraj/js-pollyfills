const arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
}