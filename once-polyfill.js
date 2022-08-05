//once polyfill

function once(fn, context) {
  let ran;

  return function () {
    if (fn) {
      ran = fn.call(context || this, arguments);
      fn = null;
    }
    return ran;
  }
}

const hello = once(function (a, b) {
  console.log('i will run only once', a, b);
});

hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);