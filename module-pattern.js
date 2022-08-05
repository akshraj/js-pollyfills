//what is module pattern

const Module = (function () {
  function privateMethods() {
    //do something
  }

  return {
    publicMethods: function () {
      //can call privateMethods
    },
  };
})();