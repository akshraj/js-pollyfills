//polyfill for apply method

let car1 = {
  color: 'red',
  company: "Ferrari"
}

function purchaseCar(currency, price) {
  console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`)
}

// purchaseCar.apply(car1, ["USD", 10000]);

Function.prototype.myApply = function (context = {}, argsArr = []) {
  if (typeof this !== 'function') {
    throw new Error(this + ' its not callable')
  }

  if (!Array.isArray(argsArr)) {
    throw new TypeError('createListFromArrayLike called on non-object')
  }

  context.fn = this;
  context.fn(...args);
}

// purchaseCar.myApply(car1, ["USD", 10000]);



