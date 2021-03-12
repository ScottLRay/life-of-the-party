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
      drinks.textContent = "Try this drink: "+ drink.drinks[0].strDrink;
    
      var categoryEl = document.createElement("div")

      htmlStr = `<h3>Drink Category:${drink.drinks[0].strCategory}</h3> <h4>Glass Type:${drink.drinks[0].strGlass}<h4>`
      categoryEl.innerHTML = htmlStr;

    drinks.append(categoryEl);


    
    console.log(drink)
  }

  getCocktail();

 
function randomjokes() {
    var endpoint = `https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&idRange=0-10&amount=1`;
    fetch(endpoint)
        .then((data) => data.json())
        .then(function (joke) {
            var jokes = document.querySelector(".joke-content")
            jokes.textContent = "Random joke: " + joke.joke
            console.log(joke);
        });
}

randomjokes();
