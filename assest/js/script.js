
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

 


function randomjokes() {
    var endpoint = `https://v2.jokeapi.dev/joke/Any?type=twopart/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&idRange=0-10&amount=1`;
    fetch(endpoint)
        .then((data) => data.json())
        .then(function (joke) {
            var jokes = document.querySelector(".joke-content")
            if (joke.joke) {
                jokes.textContent = joke.joke;
                console.log(joke);
            } else {
                jokes.textContent = joke.setup + joke.delivery;
            }
                jokes.setAttribute("style", "line-height: 2rem; font-weight: bold;")

        });

}

randomjokes();
// Variable for each piece of data 
// Create elements for
// Append styles to .joke-content  

