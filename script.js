// //basic syntax of a api
            // fetch("urlGoesHere")
            // .then(res => res.json()) 
    //parse data as json (res can be anyting,                 its just a parameter)
            // .then(data =>{console.log(data)})
            // .catch(err => {console.log(`error-- ${err} `)} )
    // //since data is an object we can grab values from it eg. data.message

//dog api 
          // fetch("https://dog.ceo/api/breeds/image/random")
          // .then(res => res.json())
          // .then(data =>{document.querySelector('.img').src = data.message})
          // .catch(err => {console.log(`error-- ${err} `)} )

//cocktail api
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
          .then(res => res.json())
          .then(data => document.querySelector('.img').src = data.drinks[0].strDrinkThumb)
          .catch(err => {console.log(`error-- ${err} `)} )

//.then(data => document.querySelector('.img').src = data.drinks[0].strDrinkThumb)