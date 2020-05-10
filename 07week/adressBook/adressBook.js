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
     //console.log(data)
     processContacts(data.results)
  })
}
let friendsList = document.getElementById("friends")

function processContacts(contacts){
  //console.log(contacts)
  contacts.forEach(function(contact){
    let firstName = contact.name.first
    let lastName = contact.name.last
    
    let friend = document.createElement("li")
    let span = document.createElement("span")
    span.innerText = `${firstName}  ${lastName}`
    friend.appendChild(span)
    let button = deleteButton()
    friend.appendChild(button)

    friend.addEventListener("mouseenter", function(){
     let city = contact.location.city
     friend.innerText = `This Person Lives In The City Of ${city}`
     friend.style.color = "orange"
     friend.style.fontWeight = "bold"
     friend.appendChild(button)
    })

    friend.addEventListener('mouseleave',function(){
      friend.innerText = `${firstName}  ${lastName}`
      friend.style.color = ""
      friend.style.fontWeight = ""
      friend.appendChild(button)
    })

    button.addEventListener("click", function(){
      friend.remove(span)
    })
    friendsList.appendChild(friend)
  })
}

function deleteButton(){
  //console.log("inside delete function",contact)
  let dButton = document.createElement("button");
  dButton.innerText = "delete";
  dButton.classList.add("delete")
  return dButton
}

