var boxEle = document.body.querySelector(".box");
var input1 = prompt("Enter the first number");
var input2 = prompt("Enter the second number");
var sum = Number(input1) + Number(input2);
boxEle.innerHTML = input1 + " + " + input2 + " = " + sum;
boxEle.reload();