const promise1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, 'one');
});
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, 'two');
});
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 800, 'three');
});

// promiseAny([promise1, promise2, promise3]).then(function (value) {
//   console.log("value ", value);
// }).catch(function (error) {
//   console.log("error ", error);
// });

function promiseAny(promiseArray) {
  let errOut = new Array(promiseArray.length);
  let counter = 0;

}