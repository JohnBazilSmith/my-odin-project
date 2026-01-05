const convertToCelsius = function(f) {
  let C = 5 * (f - 32) / 9;
  return `${f} degrees Fahrenheit is the same as ${C.toFixed(1)} degrees Celsius`;
};

const convertToFahrenheit = function(C) {
  let f = 9 * C / 5 + 32;
  return `${C} degrees Celsius is the same as ${f.toFixed(1)} degrees Fahrenheit`;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
