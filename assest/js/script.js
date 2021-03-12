// random cocktail generator
// https://www.thecocktaildb.com/api/json/v1/1/random.php

// preview of drink photo
// https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)
getCocktail();
randomJokes();

function getCocktail() {
  var endpoint = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  fetch(endpoint)
    .then((data) => data.json())
    .then((data) => displayCocktail(data.drinks[0]));
}

function displayCocktail(drink) {
  console.log(drink);
  var drinks = document.querySelector(".ct-content");
  //set variables for each piece of the data you want
  // create some elements(ex. p tag)
  //append these elemtns to ct-content
  var drinkImg = document.createElement("img");
  drinkImg.setAttribute("src", drink.strDrinkThumb);

  drinks.textContent = "Try this drink: " + drink.strDrink;

  var categoryEl = document.createElement("div");
  htmlStr = `<h3><strong>Drink Category:</strong>${drink.strCategory}</h3><h4><strong>Glass Type:</strong>${drink.strGlass}<h4>`;
  categoryEl.innerHTML = htmlStr;

  var ingredientsList = document.createElement("ul");
  for (let i = 1; i < 16; i++) {
    var ingredient = "strIngredient" + i;
    var measure = "strMeasure" + i;

    if (drink[ingredient]) {
      var li = document.createElement("li");
      li.textContent = drink[measure] + ": " + drink[ingredient];
      ingredientsList.append(li);
    }
  }

  var category2El = document.createElement("div");
  htmlStr2 = `<p>Instructions: ${drink.strInstructions}</p>`;
  category2El.innerHTML = htmlStr2;

  drinks.append(drinkImg);
  drinks.append(categoryEl);
  drinks.append(ingredientsList);
  drinks.append(category2El);
}

var newDrink = document.querySelector("#new-drink");
newDrink.addEventListener("click", (e) => {
  e.preventDefault();
  getCocktail();
});

function randomJokes() {
  var endpoint = `https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&idRange=0-10&amount=1`;
  fetch(endpoint)
    .then((data) => data.json())
    .then((data) => getJokes(data));
}

function getJokes(joke) {
  // here we are targeting the html element with the class joke-content
  var jokes = document.querySelector(".joke-content");
  // now is null
  var jokeText;
  if (joke.joke) {
    // now jokeText = "something about something"
    jokeText = joke.joke;
    // here we set the html on the page to have the jokeText "something is something"
    jokes.textContent = jokeText;
    console.log(joke);
  } else {
    jokeText = joke.setup + joke.delivery;
    jokes.textContent = jokeText;
  }
  // jokes equals <div class=joke-content> here is the joke text </div>
  jokes.setAttribute("style", "line-height: 2rem; font-weight: bold;");
}

var rBtn = document.querySelector(".random-button");
rBtn.addEventListener("click", function (e) {
  rBtn = "";
  e.preventDefault;
  randomjokes();
});

var saveJBtn = document.querySelector(".joke-button");
saveJBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("it works");

  localStorage.setItem("jokes", jokeText);
});
