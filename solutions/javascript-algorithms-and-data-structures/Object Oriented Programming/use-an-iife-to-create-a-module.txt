let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        console.log("This is cute!")
      };
    },
        singMixin: function(obj) {
      obj.sing = function() {
        console.log("Let's Sing!")
      };
    }
  }
})();