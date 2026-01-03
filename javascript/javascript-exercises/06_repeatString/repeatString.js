const repeatString = function(string, num) {
    /*
    takes num
    takes string
    if num is negative returns error
    if num is positive, it copies the strings num - 1 times and
    return new string
    */
    if (num <= 0) {
        return "Error";
    } else {
        let newString = "";
        for (let i = 0; i < num; i++) {
            newString += string;
        }
        return newString;
    }
};
console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
