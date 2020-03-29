"use strict"
//making a program to display current time
let now = Date();
// console.log("the time is ",now)
// //converting number to string
// const theNumber = 5;
// const theString = theNumber.toString();
// console.log("this string is ", theString)
// console.log(typeof(theNumber))
// console.log(typeof(theString))
// //converting sting to number 
// const otherString = "4.5";
// const theOtherNumber = parseInt(otherString,10)
// console.log(typeof(theOtherNumber))

const displayTime = () => {
  document.getElementById("Date").innerText = now;
}

document.getElementById("Date").addEventListener('click', displayTime)