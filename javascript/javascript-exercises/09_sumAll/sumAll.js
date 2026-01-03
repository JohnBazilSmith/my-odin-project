const SumAll = function(a, b) {
    if (a <= 0 || b <= 0) return "Error";
    n = Math.abs(a - b) + 1;
    return n * ( b + a ) / 2; 
};

const sumAll = function(a, b) {
    let sum = 0;
    if (a <= 0 || b <= 0) {return "Error"
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    } else {
        sum = a;
    }
    return sum;
}

console.log(sumAll(8, 4));
// Do not edit below this line
module.exports = sumAll;
