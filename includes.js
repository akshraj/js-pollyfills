Array.prototype.myIncludes = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === element) {
      return true;
    }
  }
  return false;
}