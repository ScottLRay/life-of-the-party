// random cocktail generator
// https://www.thecocktaildb.com/api/json/v1/1/random.php

// preview of drink photo
// https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)

// declare variable


function getCocktail() {
    var endpoint = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
    fetch(endpoint)
      .then((data) => data.json())
      .then((data) => displayCocktail(data));
  }

  function displayCocktail(drink){
    var drinks = document.querySelector(".ct-content");
    //set variables for each piece of the data you want
    // create some elements(ex. p tag)
    //append these elemtns to ct-content
      drinks.textContent = "Try this drink: "+ drink.drinks[0].strDrink + drink.drinks[0].strCategory + drink.drinks[0].strDrinkThumb;
    
    console.log(drink)
  }

  getCocktail();

 