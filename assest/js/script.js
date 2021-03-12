

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

