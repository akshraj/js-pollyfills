const promise1 = Promise.resolve(3);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
const promise2 = 42;


Promise.myAll([promise1, promise2, promise3]).then((val) => {
  console.log(val)
}).catch(err => {
  console.log(err)
})

Promise.myAll = function (values) {
  return new Promise((resolve, reject) => {
    let completed = 0;
    let results = [];

    values.forEach((value, index) => {
      Promise.resolve(value).then(result => {
        results[i] = result
        completed++
        if (completed === values.length) {
          resolve(results)
        }
      }).catch(err => reject(err));
    })

  })
}


