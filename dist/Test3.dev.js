"use strict";

// Script should print "Go outside" only if: it is NOT raining AND it is warm OR it is daytime.
var raining = false;
var warm = true;
var daytime = false;

function shouldGoOutside(raining, warm, daytime) {
  if (!raining && warm || daytime) {
    return "Go outside";
  } else {
    return "Stay inside";
  }
}

var result = shouldGoOutside(raining, warm, daytime);
console.log(result);
//# sourceMappingURL=Test3.dev.js.map
