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
     processContacts(data.results)
  })
}

function processContacts(contacts){
  console.log(contacts)
  contacts.forEach(function(contact){
    let firstName = contact.name.first
    let lastName = contact.name.last
    let friendsList = document.getElementById("friends")
    let friend = document.createElement("li")
    friend.innerText = `${firstName}  ${lastName}`

    friend.addEventListener("mouseenter", function showAddress(){
     let city = contact.location.city
     friend.innerText = `this person lives in the city of ${city}`
     friend.style.color = "orange"
    })

    friend.addEventListener('mouseleave',function(){
      friend.innerText = `${firstName}  ${lastName}`
      friend.style.color = ""
    })
    friendsList.appendChild(friend)
  })
}

