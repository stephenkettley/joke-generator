const jokeButton = document.getElementById("btn");
const jokeDisplay = document.getElementById("joke");

const apiKey = "vhkunGyX2M3pJmQTkYaOUA==PAeRjnpM6zTwW5BU";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
  contentType: "application/json",
};

async function getJoke() {
  try {
    jokeDisplay.innerText = "Updating...";
    jokeButton.disabled = true;
    jokeButton.innerText = "loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    jokeDisplay.textContent = data[0].joke;
    jokeButton.disabled = false;
    jokeButton.innerText = "tell me a joke";
  } catch (error) {
    jokeDisplay.textContent = "An error occurred. Try again later!";
    jokeButton.innerText = "tell me a joke";
    jokeButton.disabled = false;
    log(error);
  }
}

jokeButton.addEventListener("click", getJoke);
