"use strict";

//pseudo-code to display exactly 100 input box. Every 4th input box, display a 'x'.
function createInputBoxes() {
  var container = document.getElementById("container");

  for (var i = 1; i <= 100; i++) {
    var input = document.createElement("input");
    input.type = "text";

    if (i % 4 === 0) {
      input.value = "x";
    }

    container.appendChild(input);
  }
}

createInputBoxes();
//# sourceMappingURL=Test4.dev.js.map
