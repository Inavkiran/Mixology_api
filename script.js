
//event listener for 'show a random cocktail button'
document.querySelector('#randomBtn').addEventListener('click', randomDrink)




function randomDrink(){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(res=> res.json())
  .then(data =>{
    let drink = data.drinks[0]
  
    // console.log(drink)
   addToDom(drink)
    
  })
  .catch(err=> console.log('erroragya'))
}



function addToDom(drinks){
   // console.log(drinks)
  
  const content = document.getElementById('content')
  let newItem = document.createElement('div')
  newItem.innerHTML =   `<h2>${drinks.strDrink}</h2> \n
<img src='${drinks.strDrinkThumb}'>
<h3>Ingredients</h3>
<ul>
${listIngredients(drinks)}
</ul>
<h3>Instructions</h3>
<p>${drinks.strInstructions}<p/> `
  content.appendChild(newItem)
  // document.querySelector('#content').appendChild(div)
}

// function listIngredients(drinks){
// let str = ''
//   for(let [key,value] of Object.entries(drinks))
    

// }

function listIngredients(drink) {
	
	let str = '';

	for (const [key, value] of Object.entries(drink)) {
		if (key.includes('strIngredient') && value) {
			let measurement = drink['strMeasure' + key.substring(13, key.length)];
			measurement = measurement ? ` (${measurement.trim()})` : '';

			str += `<li>${value + measurement}</li>\n`;
		}
	}
console.log(str)
	return str;
}












// function listIngredients(drinks){
// let str = ''
//    for(let property in drinks){
//       if(property.includes('strIngredient') && drinks[property])
//     str += `<li> ${drinks[property]} </li>` }
//   for(let property in drinks){
//  if(property.includes('strMeasure') && drinks[property])
//     str += `<li> ${drinks[property]} </li>`}
//   return str
// }






// document.querySelector('#searchBtn').addEventListener('click',searchDrink)



