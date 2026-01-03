const arr = [1, 2, 3, 4, 5, 6];

function sumOfTripledEvents(array) {
    return array
        .filter((num) => num % 2 === 0)
        .map((num) => num * 3)
        .reduce((runningSum, num) => runningSum + num);
}


const orgStr = ("ofek-iS-Gay");
function camelize (str) {
    const arr = str.split('-');
    const capArr = [
        arr[0], arr.slice(1).map(
        s => {s.charAt(0).toUpperCase() + s.slice(1)}
        )
    ]
}

console.log(camelize(orgStr));