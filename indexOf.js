const arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myIndex = function (element, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === element) {
      return i;
    }
  }
  return -1;
}