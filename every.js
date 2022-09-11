Array.prototype.myEvery = function () {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i])) {
      return false;
    }
  }
  return true;
}

