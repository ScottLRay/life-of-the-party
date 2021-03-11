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
