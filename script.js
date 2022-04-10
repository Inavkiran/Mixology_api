
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
          .then(res => res.json())
          .then(data => 
            {document.querySelector('.img').src = data.drinks[0].strDrinkThumb
document.querySelector('#nameOfDrink').innerText = data.drinks[0].strDrink
             document.querySelector('#instructions').innerText = data.drinks[0].strInstructions
             console.log(data)
            }
                )
          .catch(err => {console.log(`error-- ${err} `)} )
