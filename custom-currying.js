//converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args)
    } else {
      return function (...next) {
        return curriedFunc(...next, ...args)
      }
    }
  }
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(5)(6));