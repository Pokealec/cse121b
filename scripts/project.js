// Javascript final task

// random stuff api key 1 = xs5uvdybkeHA 
// const catURL='https://cataas.com/cat/gif';
// const jokeURL= 'https://api.humorapi.com/jokes/random?api-key=ea6db24063f940afb5051de9186c47d1'
// joke api key ea6db24063f940afb5051de9186c47d1
// const Meme = 'https://api.humorapi.com/memes/random?api-key=ea6db24063f940afb5051de9186c47d1&media-type=image&keywords-in-image=false&min-rating=4';
// reddit meme api = https://meme-api.com/gimme

async function fetchData() {
    const selectedApi = document.getElementById("apiSelector").value;
    const apiUrl = getApiUrl(selectedApi);

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayResult(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function getApiUrl(apiKey) {
    // Define API URLs based on the selected option
    switch (apiKey) {
        case "randomJoke":
            return "https://api.humorapi.com/jokes/random?api-key=ea6db24063f940afb5051de9186c47d1&include-tags=clean&exclude-tags=nsfw";
        case "Norris":
            return "https://api.humorapi.com/jokes/random?api-key=ea6db24063f940afb5051de9186c47d1&include-tags=clean,Chuck,Norris&exclude-tags=nsfw";
        case "OneLiners":
            return "https://api.humorapi.com/jokes/random?api-key=ea6db24063f940afb5051de9186c47d1&include-tags=clean,one_liner&exclude-tags=nsfw";
        case "KnockKnock":
            return "https://api.humorapi.com/jokes/random?api-key=ea6db24063f940afb5051de9186c47d1&include-tags=clean,knock_knock&min-rating=7&exclude-tags=nsfw";
        case "YoMama":
            return "https://api.humorapi.com/jokes/random?api-key=ea6db24063f940afb5051de9186c47d1&include-tags=clean,yo_mama&min-rating=7&exclude-tags=nsf";
        default:
            return "";
    }
}

function displayResult(data) {
    const resultContainer = document.getElementById("resultContainer"); // got help from ChatGPT
    // Check if the 'joke' property exists in the response
    if (data && data.joke) {
        // Display only the joke part
        resultContainer.innerHTML = `<p>${data.joke}</p>`;
    } else {
        // Display a message if the 'joke' property is not present
        resultContainer.innerHTML = "<p>No joke found in the response. This probably means that it ran out of uses for the day (max is 10, what??!!)</p><h6>This number resets to zero at midnight UTC.</h6>";
    }
}

async function displayMeme() { // got help from ChatGPT
    try {
        const response = await fetch("https://meme-api.com/gimme");
        const data = await response.json();
        
        if (data.url) {
            // Open the image URL in a new tab
            window.open(data.url, '_blank');
        } else {
            console.error("No image URL found in the API response");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


function openCatLink() {
    const catLink = 'https://cataas.com/cat/gif';
    window.open(catLink, '_blank');
  }
// async function displayCats() {
//     const catUrl = getCatUrl(); // Assuming getCatUrl is a function that provides the cat API URL

//     try {
//       const response = await fetch(catUrl);
//       const data = await response.json();
//       // Check if the 'url' property exists in the response
//       if (data && data.url) {
//         // Open a new tab with the cat GIF
//         window.open(data.url, '_blank');
//       } else {
//         console.error("Invalid cat API response:", data);
//       }
//     } catch (error) {
//       console.error("Error fetching cat data:", error);
//     }
//   }
//   function getCatUrl() {
//     // Define the URL for the cat API
//     return 'https://cataas.com/cat/gif';
//   } 
// NEVER MIND -  I don't need this because of the api link actually just returning the gif instead.


function addNumbers() {
    // Get the user input
    let userInput = document.getElementById("userInput").value;

    // Split the input string into an array using spaces as the delimiter
    let numbersArray = userInput.split(" ");

    // Convert the array elements to numbers (assuming they are integers)
    numbersArray = numbersArray.map(Number);

    // array
    console.log("Numbers Array:", numbersArray);

    // Display the resulting arrays on the page (remember original and manipulate the copies)
    let ManipulatedArray = document.getElementById("numberResult");
    ManipulatedArray.innerHTML = "<p>Here is your array: </p><p>" + numbersArray.join(", ") + "</p>";

    let evenArray = numbersArray.slice().filter(number => number % 2 === 0);
    ManipulatedArray.innerHTML += "<p>Here are the same numbers, but only evens: </p><p>"+ evenArray.join(", ") + "</p>";

    let oddArray = numbersArray.slice().filter(number => number % 2);
    ManipulatedArray.innerHTML += "<p>Here they are again, but only odd: </p><p>"+ oddArray.join(", ") + "</p>";

    let sortedArray = numbersArray.slice().sort((a, b) => a - b);
    ManipulatedArray.innerHTML += "<p>Here is your array again, but sorted: </p><p>" + sortedArray.join(", ") + "</p>";

    let multipliedArray = numbersArray.slice().map(number => number * number);
    ManipulatedArray.innerHTML += "<p>Here is your array, with each number squared: </p><p>" + multipliedArray.join(", ") + "</p>";

    let thirdArray = numbersArray.slice()[2];
    ManipulatedArray.innerHTML += "<p>And this was the third number in your original array: </p><p>" + thirdArray + "</p>";


}