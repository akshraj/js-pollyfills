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
  let mappedPromises = values.map(promise => {
    return promise.then(value => {
      return {
        status: 'fulfilled',
        value
      }
    }).catch(reason => {
      return {
        status: 'rejected',
        reason
      }
    })
  })

  return Promise.all(mappedPromises);
}


