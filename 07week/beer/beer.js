'use strict'

window.onload = function(){
  brewery()
}

let brewery = function(){
  fetch('https://sandbox-api.brewerydb.com/v2/?key=53c51b7e395707f7bdb0b4c84b89edb2')
  .then(function(response){
    console.log( response.json())
  })
  .then(function(data){
      console.log(data)
  })
}

