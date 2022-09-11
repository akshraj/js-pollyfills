Array.prototype.myFill = function () {
  if (start < 0) {
    start = this.length + start;
  }

  if (end < 0) {
    end = this.length + end;
  }

  for (let i = start; i < end; i++) {
    this[i] = value;
  }

  return this;
}