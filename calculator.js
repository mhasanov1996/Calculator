let buffer = "0";
let lastOperator;
let runningTotal = 0;
const answerBox = document.querySelector(".answerBox");

document.querySelector(".buttons").addEventListener("click", function (event) {
  buttonClick(event.target.innerHTML);
});

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender(value);
}

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      lastOperator = null;
      break;

    case "=":
      if (lastOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      buffer = "" + runningTotal;
      runningTotal = 0;
      break;

    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.slice(0, buffer.length - 1);
      }
      break;

    default:
      handleMath(value);
      break;
  }
}

function rerender(value) {
  answerBox.innerHTML = buffer;
}

function handleMath(value) {
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  lastOperator = value;
  buffer = "0";
}

function flushOperation(value) {
  if (lastOperator === "+") {
    runningTotal += value;
  } else if (lastOperator === "-") {
    runningTotal -= value;
  } else if (lastOperator === "×") {
    runningTotal *= value;
  } else {
    runningTotal /= value;
  }
}
