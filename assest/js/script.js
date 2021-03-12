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
    
      var categoryEl = document.createElement("div");
      htmlStr = `<h3>Drink Category:${drink.drinks[0].strCategory}</h3><h4>Glass Type:${drink.drinks[0].strGlass}<h4>`;
      categoryEl.innerHTML = htmlStr;

      // need to put for in loop here
      var drinksIngredientArray = [{
        a: drink.drinks[0].strIngredient1,
        b: drink.drinks[0].strIngredient2,
        c: drink.drinks[0].strIngredient3,
        d: drink.drinks[0].strIngredient4,
        e: drink.drinks[0].strIngredient5,
        f: drink.drinks[0].strIngredient6,
        g: drink.drinks[0].strIngredient7,
        h: drink.drinks[0].strIngredient8,
        i: drink.drinks[0].strIngredient9,
        j: drink.drinks[0].strIngredient10,
        k: drink.drinks[0].strIngredient11,
        l: drink.drinks[0].strIngredient12,
        m: drink.drinks[0].strIngredient13,
        n: drink.drinks[0].strIngredient14,
        o: drink.drinks[0].strIngredient15,
      }];
      var drinksIngredientObject = drinksIngredientArray[0];
      console.log(drinksIngredientObject);

      for (var key in drinksIngredientObject){
        if (drinksIngredientObject[key]=== !null);
        console.log(drinksIngredientObject);
      };

      var category2El = document.createElement("div");
      htmlStr2 = `<p>Instructions: ${drink.drinks[0].strInstructions}</p>`;
      category2El.innerHTML =htmlStr2;

      

    drinks.append(categoryEl);
    drinks.append(category2El);


    
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
