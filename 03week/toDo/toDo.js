const allSpans = document.querySelectorAll('span');

for(let i = 0; i<allSpans.length; i++){
  let span = allSpans[i];
  setupSpanEvent(span)
}

function setupSpanEvent(span){
    span.addEventListener("click", function(){
    span.classList.toggle("done");
  })
}

let allDeletes = document.querySelectorAll(".delete");

for(let i = 0; i < allDeletes.length;i++){
  let deleteButton = allDeletes[i];
  setupDeleteEvent(deleteButton);
}

function setupDeleteEvent(deleteButton){
  deleteButton.addEventListener("click", function(){
    let parentLi = deleteButton.parentElement;
    let parentUl = parentLi.parentElement;
    parentUl.removeChild(parentLi)
  })
}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click",function(){
  let todoText = document.getElementById("inputText").value;

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.innerText =todoText;

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.classList.add("delete");
  
  let ul = document.querySelector("ul")
  ul.appendChild(li);
  li.appendChild(span);
  li.appendChild(deleteButton);
  setupDeleteEvent(deleteButton);
  setupSpanEvent(span)

})