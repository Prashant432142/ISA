// // /*
// //  * Implement all your JavaScript in this file!
// //  */
// // function insert (num){
// //     document.querySelectorAll(display)=document.querySelectorAll(display) + num;
// // }

// // function equal(){
// //     var exp = document.value;
// //     if (exp){
// //         document.querySelectorAll(button).value=eval(exp)
// //     }
// // }

// // function clear(){
// //   var exp = document.querySelectorAll(button).value;
// //   document.querySelectorAll(button).value=exp.substring(0,exp.length -exp.length);
// // }

// // // const button.value=document.getElementById(button.value);
// // // document.addEventListener("keydown",(event) =>{
// // //     const keypress=event.key;
// // //     button.value.value+=keypress;
// // // });

// // const cell=document.querySelector('td[colspan="4"]');
// // const button=document.querySelectorAll('button');

// // button.forEach(button => {
// //     button.addEventListener('click',function(event){
// //         cell.querySelector('input').disabled=false;
// //         cell.querySelector('input').focus();
// //         cell.querySelector('input').value=event.target.value;
// //     });
// // });

// // Get references to the display input and output span elements
// var display = document.getElementById('display');
// var output = document.getElementById('output');

// // Define a variable to keep track of the current calculation
// var calculation = '';

// // Define a function to add numbers and operators to the calculation string
// function insert(value) {
//   calculation += value;
//   display.value = calculation;
// }

// // Define a function to clear the display and calculation string
// // function clear() {
// //   calculation = '';
// //   display.value = '';
// // }

// function clear() {
//   document.getElementById("display").value = "";
//   calculation = '';
// }

// // Define a function to evaluate the current calculation and display the result
// function equal() {
//   try {
//     var result = eval(calculation);
//     display.value = result;
//     calculation = result.toString();
//   } catch (error) {
//     output.innerHTML = error.message;
//   }
// }


const display = document.getElementById("display");
let num1 = null;
let num2 = null;
let operation = null;
let result = null;

function numberClick(event) {
  const numString = event.target.value;

  if (!operation) {
    num1 = num1 ? num1 + numString : numString;
  } else {
    num2 = num2 ? num2 + numString : numString;
  }

  display.value = operation ? num2 : num1;
}

function operationClick(event) {
  if (!operation) {
    operation = event.target.textContent;
    num2 = null;
  } else {
    num1 = calculateResult(num1, num2, operation);
    operation = event.target.textContent;
    num2 = null;
  }

  display.value = operation;
}

function clearClick() {
  num1 = null;
  num2 = null;
  operation = null;
  result = null;
  display.value = "";
}

function equalsClick() {
  result = calculateResult(num1, num2, operation);
  display.value = result;
  num1 = result;
  result +=num2;
}

function calculateResult(num1, num2, operation) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return null;
  }
}

document.querySelectorAll("button").forEach(button => {
  if (button.value.match(/[0-9]/)) {
    button.addEventListener("click", numberClick);
  } else if (button.textContent.match(/[\+\-\*\/]/)) {
    button.addEventListener("click", operationClick);
  } else if (button.id === "clearButton") {
    button.addEventListener("click", clearClick);
  } else if (button.id === "equalsButton") {
    button.addEventListener("click", equalsClick);
  }
});