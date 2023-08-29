function delay(milliseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }
  
  // Commit: "Challenge 6.1 - Done with Step 1".
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
  .then(response => response.json())
  .then(data => {
    console.log("Random Fact:", data.text);
  });

// Commit: "Challenge 6.1 - Done with Step 2".

//try { ... } catch (error) { ... }: This is a try and catch block.
// The code within the try block will be executed, and if any errors occur, they will be caught and handled in the catch block.
//Once the JSON data is obtained from the response, the data.text
async function fetchRandomFact() {
    try {
      const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      const data = await response.json();
      console.log("Random Fact:", data.text);
    } catch (error) {
      console.error("Error fetching random fact:", error);
    }
  }
  
    
  
  fetchRandomFact();
  
  // Commit: "Challenge 6.1 - Done with Step 3".
// An array named dogImageURLs
//defines an async function named fetchDogImages that takes an array of URLs as its parameter.
//try { ... } catch (error) { ... }: Similar to before, this is a try and catch block used to handle potential errors 
// to concurrently convert the response bodies to JSON format using the json method. The result is an array of JSON data.
//console.error("Error fetching dog images:", error);: If any error occurs during the try block, it's caught and logged to the console using console.error.
//Finally, the fetchDogImages function is invoked with the dogImageURLs array to start fetching and displaying dog image URLs.
fetchDogImages(dogImageURLs);: 
  const dogImageURLs = [
    "https://dog.ceo/api/breeds/image/random",
    "https://dog.ceo/api/breeds/image/random",
    "https://dog.ceo/api/breeds/image/random"
  ];
  
  async function fetchDogImages(urls) {
    try {
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const responseData = await Promise.all(responses.map(response => response.json()));
      
      responseData.forEach(data => {
        console.log("Dog Image URL:", data.message);
      });
    } catch (error) {
      console.error("Error fetching dog images:", error);
    }
  }
  
  fetchDogImages(dogImageURLs);
  
  // Commit: "Challenge 6.1 - Done with Step 4".
      