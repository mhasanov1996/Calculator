let nums = [];
let a = 0;
const answerBox = document.querySelector(".answerBox");
const selectedNumber = document.querySelectorAll(".numBut");
const plusBut = document.querySelector(".plusBut");
const divideBut = document.querySelector(".divideBut");
const multiplyBut = document.querySelector(".multiplyBut");
const minusBut = document.querySelector(".minusBut");
const cButton = document.querySelector(".cButton");
const delBut = document.querySelector(".delBut");
const equealBut = document.querySelector(".equealBut");

selectedNumber.forEach(function (element) {
  element.addEventListener("click", function () {
    answerBox.innerHTML += element.textContent;
  });
});

plusBut.addEventListener("click", function () {
  nums.push(parseInt(answerBox.textContent));
  answerBox.textContent = "";
});

equealBut.addEventListener("click", function () {
  nums.push(parseInt(answerBox.textContent));
  if (nums.length < 2) {
    a = nums[0];
  } else {
    nums.forEach(function (nums) {
      a += nums;
    });
  }
  nums.length = 0;
  nums.push(parseInt(answerBox.textContent));
  answerBox.textContent = a;
});
