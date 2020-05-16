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

class teammate extends player {
  constructor(name,age,skill,team,mascot){
    super(name,age,skill,team)
    this.mascot = mascot
  }
  assignMascot(player){
    if(player.team === "Red"){
      player.mascot = "Fire"
    }else if(player.team = "Blue"){
      let blueLi = document.getElementsByClassName("blueID")
      player.mascot = "Ice"
    }
  }
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
  let players = document.getElementById("players")
  let list = document.getElementById("people")
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
      listOfPlayers.pop()
      playerArray.push(play)
      redButton.addEventListener("click", function() {joinRed(play)
        if(redTeam.length === 3){
          players.appendChild(li)
        } else{
          players.removeChild(li)
        } 
      })
      blueButton.addEventListener("click",function() {joinBlue(play)
        if(blueTeam.length === 3){
          players.appendChild(li)
        } else{
          players.removeChild(li)
        }
      })
    })  
  }else {
    alert("Must be 18 to play")
  } 
}

function joinRed(player){
  let rTeam = document.getElementById("red")
  let li = document.createElement("li")
  if(redTeam.length === 3){
    alert("each team can only have 3 people")
    //rTeam.removeChild(li)
  }else {
    redTeam.push(player)
    rTeam.appendChild(li)
    redTeam.forEach(function(red){
      redTeam.pop(red)
      red = new teammate(red.name,red.age,red.skill,red.team,null)
      red.team = "Red"
      red.assignMascot(red)
      redTeam.push(red)
      li.innerText = `${player.name} - is assigned to ${red.team},${red.mascot}`
    })
  }  console.log(redTeam)
}

function joinBlue(player){
  let bTeam = document.getElementById("blue")
  let li = document.createElement("li")
   if(blueTeam.length === 3){
     alert("each team can only have 3 people")
     //bTeam.removeChild(li)
   }else{
      blueTeam.push(player)
      bTeam.appendChild(li)
      li.classList.add("blueID")
      blueTeam.forEach(function(blue){
        blueTeam.pop(blue)
        blue = new teammate(blue.name,blue.age,blue.skill,blue.team,null)
        blue.team = "Blue"
        blue.assignMascot(blue)
        blueTeam.push(blue)
        li.innerText = `${player.name} - is assigned to ${blue.team},${blue.mascot}`
      })
   } console.log(blueTeam)
}

