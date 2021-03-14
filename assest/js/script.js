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

  htmlStr = `<h3><strong>Drink Category: </strong>${drink.strCategory}</h3><h4><strong>Glass Type: </strong>${drink.strGlass}<h4>`;
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

  currentDrink = drink.strDrink;
}
var newDrink = document.querySelector("#new-drink");
newDrink.addEventListener("click", function (e) {
  e.preventDefault();
  getCocktail();
});

var saveDrink = document.querySelector("#save-drink");
saveDrink.addEventListener("click", function (e) {
  e.preventDefault();

  endUserSave.push(currentDrink);
  localStorage.setItem("drink", JSON.stringify(endUserSave));
  renderFavoritesDrink();
});

var currentDrink;
var endUserSave = getSaveDrinks();

function getSaveDrinks() {
  var endUserSaveData = localStorage.getItem("drink");
  if (endUserSaveData) {
    endUserSaveData = JSON.parse(endUserSaveData);
  } else {
    endUserSaveData = [];
  }
  return endUserSaveData;
}

function renderFavoritesDrink() {
  var favoritesDrink = document.querySelector(".saved-cocktails");

  favoritesDrink.innerHTML = "";
  for (let i = 0; i < endUserSave.length; i++) {
    var drink = endUserSave[i];

    var drinkEl = document.createElement("p");
    drinkEl.textContent = drink;
    favoritesDrink.append(drinkEl);
  }
}
renderFavoritesDrink();

function randomJokes() {
  var endpoint = `https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&idRange=0-10&amount=1`;
  fetch(endpoint)
    .then((data) => data.json())
    .then((data) => getJoke(data));
}
function getJoke(data) {
  // here we are targeting the html element with the class joke-content
  var jokes = document.querySelector(".joke-content");
  // now is null
  var jokeText;
  if (data.joke) {
    // now jokeText = "something about something"
    jokeText = data.joke;
    // here we set the html on the page to have the jokeText "something is something"
    jokes.textContent = jokeText;
    console.log(data);
  } else {
    jokeText = data.setup + data.delivery;
    jokes.textContent = jokeText;
  }
  // jokes equals <div class=joke-content> here is the joke text </div>
  jokes.setAttribute("style", "line-height: 2rem;");

  currentJokeText = jokeText;
}
var saveJoke = document.querySelector(".joke-button");
saveJoke.addEventListener("click", function (e) {
  e.preventDefault();

  userSave.push(currentJokeText);
  localStorage.setItem("joke", JSON.stringify(userSave));
  renderFavoritesJoke();
});

var currentJokeText;
var newJoke = document.querySelector("#new-joke");
newJoke.addEventListener("click", function (e) {
  e.preventDefault();
  randomJokes();
});

var userSave = getSaveJokes();

function getSaveJokes() {
  var userSaveData = localStorage.getItem("joke");
  if (userSaveData) {
    userSaveData = JSON.parse(userSaveData);
  } else {
    userSaveData = [];
  }
  return userSaveData;
}

function renderFavoritesJoke() {
  var getFavoritesJoke = document.querySelector(".saved-jokes");
  getFavoritesJoke.innerHTML = "";
  for (let i = 0; i < userSave.length; i++) {
    var joke = userSave[i];

    var jokeEl = document.createElement("p");
    jokeEl.textContent = joke;
    getFavoritesJoke.append(jokeEl);
  }
}
renderFavoritesJoke();
