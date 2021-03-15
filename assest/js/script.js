// random cocktail generator
// https://www.thecocktaildb.com/api/json/v1/1/random.php
// preview of drink photo
// https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)
var currentJokeText;
var currentDrink;
var userSave = getSaveJokes();
var endUserSave = getSaveDrinks();
var newJoke = document.querySelector("#new-joke");
var newDrink = document.querySelector("#new-drink");
var saveDrink = document.querySelector("#save-drink");
var saveJoke = document.querySelector(".joke-button");
getCocktail();
randomJokes();
renderFavoritesJoke();
renderFavoritesDrink();
saveJoke.addEventListener("click", function (e) {
  e.preventDefault();
  userSave.push(currentJokeText);
  localStorage.setItem("joke", JSON.stringify(userSave));
  renderFavoritesJoke();
});
newJoke.addEventListener("click", function (e) {
  e.preventDefault();
  randomJokes();
});
newDrink.addEventListener("click", function (e) {
  e.preventDefault();
  getCocktail();
});
saveDrink.addEventListener("click", function (e) {
  e.preventDefault();
  endUserSave.push(currentDrink);
  localStorage.setItem("drink", JSON.stringify(endUserSave));
  renderFavoritesDrink();
});
function getCocktail() {
  var endpoint = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  fetch(endpoint)
    .then((data) => data.json())
    .then((data) => displayCocktail(data.drinks[0]));
}
function displayCocktail(drink) {
  var drinks = document.querySelector(".ct-content");
  drinks.innerHTML = ""
  //set variables for each piece of the data you want
  drinks.append(buildDrinkCard(drink));
  // need to change this out, it's throwing off the name that needs to go into template literal
  currentDrink = drink;
}
function buildDrinkCard(drink) {
  // create some elements(ex. p tag)
  //append these elemtns to ct-content

  var drinkContainer = document.createElement("div");
  drinkContainer.classList.add("drink-card");

  var category3El = document.createElement("div");
  htmlStr3 = `<h3><strong>Try this drink:</strong> ${drink.strDrink}</h3>`;
  category3El.innerHTML = htmlStr3;


  var drinkImg = document.createElement("img");
  // drink image
  drinkImg.setAttribute("src", drink.strDrinkThumb);

  var category3El = document.createElement("div");
  htmlStr3 = `<h3><strong>Try this drink:</strong> ${drink.strDrink}</h3>`;
  category3El.innerHTML = htmlStr3;

  // create html div for drink recipe
  var categoryEl = document.createElement("div");
  // html text for drink category & glass type
  htmlStr = `<h4><strong>Drink Category: </strong>${drink.strCategory}</h4><h4><strong>Glass Type: </strong>${drink.strGlass}<h4>`;
  categoryEl.innerHTML = htmlStr;
  // html for drink measurements & ingredients
  var ingredientsList = document.createElement("ul");
  // for loop for setting up going through listed measurements and ingredients
  for (let i = 1; i < 16; i++) {
    // variables for measurement & ingredient
    var ingredient = "strIngredient" + i;
    var measure = "strMeasure" + i;
    // if there is a string in the measurement & ingredients,
    if (drink[ingredient]) {
      // then create list measurement + ingredient
      var li = document.createElement("li");
      li.textContent = drink[measure] + ": " + drink[ingredient];
      ingredientsList.append(li);
    }
  }
  // html for instructions
  var category2El = document.createElement("div");
  htmlStr2 = `<h4>Instructions: ${drink.strInstructions}</h4>`;
  category2El.innerHTML = htmlStr2;

  
}
var displayDrinkFromOurLocalStorage = function displayCocktail(drink) {
    console.log(drink);
  
    var drinks = document.querySelector(".ct-content");
    //set variables for each piece of the data you want
    // create some elements(ex. p tag)
    //append these elemtns to ct-content
    var drinkImg = document.createElement("img");
  
    // drink image
    drinkImg.setAttribute("src", drink.strDrinkThumb);
  
    drinks.textContent = "Try this drink: " + drink.strDrink;
  
    var category3El = document.querySelector("div");
    htmlStr3 = `<h3>Try this drink: ${drink.strDrink}</h3>`;
    category3El = htmlStr3;
  
    // create html div for drink recipe
    var categoryEl = document.createElement("div");
  
    // html text for drink category & glass type
    htmlStr = `<h4><strong>Drink Category: </strong>${drink.strCategory}</h4><h4><strong>Glass Type: </strong>${drink.strGlass}<h4>`;
    categoryEl.innerHTML = htmlStr;
  
    // html for drink measurements & ingredients
    var ingredientsList = document.createElement("ul");
  
    // for loop for setting up going through listed measurements and ingredients
    for (let i = 1; i < 16; i++) {
  
      // variables for measurement & ingredient
      var ingredient = "strIngredient" + i;
      var measure = "strMeasure" + i;
  
      // if there is a string in the measurement & ingredients,
      if (drink[ingredient]) {
  
        // then create list measurement + ingredient
        var li = document.createElement("li");
        li.textContent = drink[measure] + ": " + drink[ingredient];
        ingredientsList.append(li);
      }
    }
    // html for instructions
    var category2El = document.createElement("div");
    htmlStr2 = `<h4>Instructions: ${drink.strInstructions}</h4>`;
    category2El.innerHTML = htmlStr2;
  
    drinks.append(category3El);
    drinks.append(drinkImg);
    drinks.append(categoryEl);
    drinks.append(ingredientsList);
    drinks.append(category2El);
    
  
    // need to change this out, it's throwing off the name that needs to go into template literal
    //   currentDrink = drink.strDrink;
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
    favoritesDrink.append(buildDrinkCard(drink));
  }
}
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