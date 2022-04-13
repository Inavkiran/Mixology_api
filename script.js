/////////////////////////////////////////////
//BASIC FORMAT FOR API
// fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//   .then(res => res.json())
//   .then(data => 
//     {document.querySelector('.img').src = data.drinks[0].strDrinkThumb
//      document.querySelector('#nameOfDrink').innerText = data.drinks[0].strDrink
//      document.querySelector('#inst').innerText = data.drinks[0].strInstructions
     
//      console.log(data)
//     }
//         )
//   .catch(err => {console.log(`error-- ${err} `)} )
///////////////////////////////////////////////////

//BASIC THINGS
// SHOW INGREDIENTS PROPERLY




//THINGS IS NEED FOR CAROSUEL
//ADD A SEARCH OPTION OR CLICK ON RANDOM DRINK
//IF SEARCHED, WE NEED TO OUTPUT THE SEARCHED DRINKS
//CAN ALSO ADD, HOW MANY DRINKS ARE SEARCHED FOR AND BACK AND NEXT BUTTONS
///////////////////////////////////////////////

//focusing on a random cocktail

document.querySelector('#randomBtn').addEventListener('click', randomDrink)

document.querySelector('#searchBtn').addEventListener('click',searchDrink)

function randomDrink(){
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then(res => res.json())
  .then(data => 
    {document.querySelector('.img').src = data.drinks[0].strDrinkThumb
     document.querySelector('#nameOfDrink').innerText = data.drinks[0].strDrink
     document.querySelector('h3').innerText = 'Instructions'
     document.querySelector('#inst').innerText = data.drinks[0].strInstructions
    
     
    }
        )
  .catch(err => {console.log(`error-- ${err} `)} )
}

////////////////////////////////////////////////////
//search button 



document.querySelector('#searchBtn').addEventListener('click',searchDrink)

function searchDrink(){
  let searchTerm = document.querySelector('input').value
  
  
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchTerm}`)
  .then(res => res.json())
  .then(data => 
    {document.querySelector('.img').src = data.drinks[0].strDrinkThumb
     document.querySelector('#nameOfDrink').innerText = data.drinks[0].strDrink
     
     document.querySelector('#inst').innerText = data.drinks[0].strInstructions
 
     
    }
        )
  .catch(err => {console.log(`error-- ${err} `)} )

  
}




