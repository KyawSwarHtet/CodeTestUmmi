// Script should print "Go outside" only if: it is NOT raining AND it is warm OR it is daytime.

const raining = false;
const warm = true;
const daytime = false;

function shouldGoOutside(raining, warm, daytime) {
  if ((!raining && warm) || daytime) {
    return "Go outside";
  } else {
    return "Stay inside";
  }
}

const result = shouldGoOutside(raining, warm, daytime);
console.log(result);
