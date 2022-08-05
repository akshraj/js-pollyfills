//infinite currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  }
}

console.log(add(5)(3)(5)(6)());


//currying vs partial application


//partial application

function sum(a) {
  return function (b, c) {
    return a + b + c;
  }
}

console.log(sum(5)(4, 5));


//manipulating dom

function updateElementText(id) {
  return function (content) {
    document.querySelector('#' + id).textContent = content;
  }
}

const updateHeader = updateElementText('heading');
updateHeader('hello this is new heading')