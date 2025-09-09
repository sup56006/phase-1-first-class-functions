// receive function
function receivesAFunction(callback) {
  callback(); // Just call it
}

//returns function(named)
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I'm a named function!");
  };
}

// returns function(anonymous)
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm anonymous!");
  };
}
