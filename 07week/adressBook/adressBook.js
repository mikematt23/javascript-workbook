"use strict"

window.onload = function(){
  people()
}


let people = function(){
  fetch('https://randomuser.me/api/?results=10')
  .then(function(response){
    return response.json()
  }) 
  .then(function(data){
     console.log(data)
     data.map()
  })
}

// let getName = function(person){
//   console.log(person.getName)

// }

