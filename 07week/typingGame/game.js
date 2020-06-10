

window.onload= function(){
people()
}

let people = function(){
  fetch('https://randomuser.me/api/?results=10')
  .then(function(response){
    return response.json()
  }) 
  .then(function(data){
     processContacts(data.results)
  })
}
document.getElementById("body")
function processContacts(contacts){
  console.log(contacts)
  contacts.forEach(function(contact){
    let name = contact.name.first + " " + contact.name.last
    let friend = document.createElement('li')
    let img = document.createElement("img")
    let button = document.createElement("button")
    button.innerText = "Click to RoboFi"
    let span = document.createElement("span")

    span.innerText = name
    friend.appendChild(img)
    friend.appendChild(button)
    friend.appendChild(span)
    body.appendChild(friend)

    button.addEventListener("click", function(){
      img.src = 'https://robohash.org/'+ name
    })
  })
}