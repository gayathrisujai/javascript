// sum of squares of the elements of an array.
let arr=[1,2,3,4,5,6]
function Squares(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 2; 
    }

    return sum;
}
// iterate from 0 to 15.
const result = Squares(arr);
console.log(`The sum of squares of the array elements is: ${result}`); 

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even.`);
    } else {
        console.log(`${i} is odd.`);
    }
}
// most frequent item of an array
let array=[2,3,4,5,6,2,3,4,5,5,5,5,5,3];
function findMostFrequent(arr) {
    if (arr.length === 0) {
        console.log("The array is empty.");
        return;
    }
    const frequencyMap = {};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (frequencyMap[item]) {
            frequencyMap[item]++;
        } else {
            frequencyMap[item] = 1;
        }
    }
    let mostFrequentItem = arr[0];
    let maxFrequency = 1;
    for (const item in frequencyMap) {
        if (frequencyMap[item] > maxFrequency) {
            maxFrequency = frequencyMap[item];
            mostFrequentItem = item;
        }
    }
    console.log(`The most frequent item is '${mostFrequentItem}' with a frequency of ${maxFrequency}.`);
    return mostFrequentItem;
}
findMostFrequent(array); 
// get an array and to read the first element of an array
let numbers = [23, 67, 10, 56,78];
function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}
function checkFirstElementPrime(arr) {
    if (arr.length === 0) {
        console.log("The array is empty.");
        return;
    }

    const firstElement = arr[0]; 
    if (typeof firstElement !== 'number') {
        console.log("The first element is not a number.");
        return;
    }
    if (isPrime(firstElement)) {
        console.log(`The first element (${firstElement}) is a prime number.`);
    } else {
        console.log(`The first element (${firstElement}) is not a prime number.`);
    }
}
checkFirstElementPrime(numbers); 
