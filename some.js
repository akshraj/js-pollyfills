Array.prototype.mySome = function () {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      return true;
    }
  }
  return false;
}