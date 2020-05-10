const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]
const playerArray = []
const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player {
  constructor(name, age, skill, team){
    this.name = name;
    this.age = age;
    this.skill = skill;
    this.team = null;
  }
}
class teammate {
  constructor(){}
}


const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person)
      listElement.removeChild(li)
    })
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.age))
    listElement.append(li)
  })
}

const makePlayer = (id) => {
  console.log(`li ${id.age} was clicked!`)
  let players = document.getElementById("players")
  let list = document.getElementById("people")
  console.log(id)
  if(id.age > 18){
    listOfPlayers.push(id)
    listOfPlayers.map(function(play){
      play = new player(play.name, play.age,play.skillSet,null)
      let li = document.createElement("li")
      let redButton = document.createElement("button")
      let blueButton = document.createElement("button")
      blueButton.innerText = "blue Team"
      redButton.innerText = "Red Team"
      li.innerText = play.name + " - " + play.age
      li.appendChild(redButton);
      li.appendChild(blueButton);
      players.appendChild(li)
      lastPlayer = listOfPlayers.pop()
      playerArray.push(lastPlayer)

      redButton.addEventListener("click", function joinRed(){})
      blueButton.addEventListener("click",function joinBlue(){})
    })  
  }else{
    alert("Must be 18 to play")
  }
}
console.log(playerArray)
function joinRed(){

}

function joinBlue(){

}
