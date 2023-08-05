"use strict";

// Sum all integers from $start to $end (included) and print the result.
var start = 1;
var end = 3;

function sumIntegers(start, end) {
  var sum = 0;

  for (var i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

var result = sumIntegers(start, end);
console.log("result for Suming start: ".concat(start, " and end: ").concat(end, " = ").concat(result));
//# sourceMappingURL=Test2.dev.js.map
