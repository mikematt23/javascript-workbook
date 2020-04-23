"use strict"

// Use a do...while loop to console.log the numbers from 1 to 1000.
// Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
// Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
// Use .map() to map over the arrayOfPersons and console.log() their information.
// Use .filter() to filter the persons array and console.log only males in the array.
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

 let i = 0;
 do{
    console.log(i);
    i++
 }
 while(i < 1001);
 
 let persons = {
   firstName: "Jane",
   lastName : "Doe",
   birthDate : "Jan 5, 1925",
   gender : "female"
 }

// let person = persons.birthDate.slice(7);
// console.log(person)
// let d;
// for(d in persons){
  
//  if(d.birthDate % 2 === 0){

//    return console.log("odd")
//  } else {
//    return console.log("even")
//  }
// }

class human{
  constructor(firstN, lastN, birthDay, gender){
    this.name = firstN;
    this.lastName = lastN;
    this.birthDay = birthDay;
    this.gender = gender; 
  }
}

let john = new human("John","Smith","May 9, 1992", "Male");
let mary = new human("Mary","Maze", "June 9, 1988","Female");
let mike = new human("Mike", "Matt", "Sept 19, 1989","Male")
let jane = new human("Jane", "Doe", "Dec 19, 2000","Female")

let people = [john,mike,mary,jane]

let info = people.map(x => {
  console.log(`this is ${x.name} ${x.lastName} they were born ${x.birthDay} they are a ${x.gender}`)
})

let onlyMales = people.filter(x => {
  if(x.gender === "Male"){
    console.log(`${x.name} is a male`); // if I put return here and then run the code on line 70 i get an array 
    //return `${x.name} is a male`
  }                                       //with 2 objects not the string a
})

let bornBefore = people.filter(x => {
  let date;
  if(x.birthDay.length === 11){
    date = x.birthDay.slice(6).trim()
  
  }else if (x.birthDay.length === 12){
    date = x.birthDay.slice(7).trim()

  }else if (x.birthDay.length === 13){
    date = x.birthDay.slice(8).trim()
  }

  if(date > 1990){
    console.log(`${x.name} was born before 1990 : ${x.birthDay} `)
  }
})

//console.log(onlyMales);