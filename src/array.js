let Data = ["A", 10, "B", 20, "C", 30, "D"];

let strings = Data.filter(item => typeof item === 'string').sort();
let numbers = Data.filter(item => typeof item === 'number').sort((a, b) => a - b);

console.log("Strings:", strings); // ["A", "B", "C", "D"]
console.log("Numbers:", numbers); // [10, 20, 30]