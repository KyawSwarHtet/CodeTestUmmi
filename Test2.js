// Sum all integers from $start to $end (included) and print the result.
const start = 1;
const end = 3;

function sumIntegers(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

const result = sumIntegers(start, end);
console.log(`result for Suming start: ${start} and end: ${end} = ${result}`);
