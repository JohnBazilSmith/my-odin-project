const removeFromArray = function(arr, ...removed) {
    return arr.filter(item => !removed.includes(item));
};

/* function processNames(...names) {
    let filteredArr = names.filter(str => str.length > 3);
    return filteredArr.map(s => s.split("").reverse().join("")).join(", ");
}; */

let array = [1,2,3,4,3,"3"];
console.log(removeFromArray(array, 3, "3"));

// Do not edit below this line
module.exports = removeFromArray;
