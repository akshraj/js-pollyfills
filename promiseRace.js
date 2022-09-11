const promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'one');
})

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, 'two');
})

// Promise.race([promise1, promise2]).then(function (result) {
//   console.log(result);
// })

export function promiseRace(promiseArray) {
  return new Promise(function (resolve, reject) {
    promiseArray.forEach(function (promise) {
      Promise.resolve(promise).then(resolve).catch(reject);
    })
  })
}