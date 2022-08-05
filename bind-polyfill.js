//polyfill for bind method

let car1 = {
  color: 'red',
  company: "Ferrari"
}

function purchaseCar(currency, price) {
  console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`)
}

// const fn = purchaseCar.bind(car1);
//fn("USD",100000)

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + 'cannot be bound as its not callable');
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  }

}

// purchaseCar.myBind(car1, "USD", 10000);



