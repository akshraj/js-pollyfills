function myMemoize(fn, context) {
  let res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args)
    }
    return res[argsCache];
  }
}

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 100000; i++) {

  }
  return num1 * num2
}

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time('first call');
console.log(memoizedClumsyProduct(384732, 4857348));
console.timeEnd('end cal')