const add = function(a, b) {
	if (Number.isFinite(a) && Number.isFinite(b)) return a + b;
  else return "Error!";
};

const subtract = function(a, b) {
	if (Number.isFinite(a) && Number.isFinite(b)) return a - b;
  else return "Error!";
};

const sum = function(arr) {
	const result = arr.reduce((acc, val) => acc + val, 0);
  return result;
};

const multiply = function(arr) {
  const result = arr.reduce((acc, val) => acc * val, 0);
  return result;
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);

  /*   let orgBase = base;
  for (let i = 1; i < exponent; i++) {
    base *= orgBase;
  };
  return base;
  */
};

const factorial = function(num) {
  let result = 1;
	for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
