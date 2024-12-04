// SCHEDULE A FETCH REQUEST
// Step 1: Create a variable 'counter' and set it to 1
let counter = 1;

// Step 2: Use setInterval to schedule a fetch request every 5 seconds
const intervalId = setInterval(() => {
  // Step 3: Construct the fetch URL using the current value of 'counter'
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;

  // Step 4: Fetch the data from the API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Step 5: Extract the Pokémon's name and ID
      const pokemon = {
        id: data.id,
        name: data.name,
      };

      // Output the Pokémon object to the console
      console.log(pokemon);
    })
    .catch((error) => {
      console.error('Error fetching Pokémon data:', error);
    });

  // Step 6: Increment the counter
  counter++;

  // Step 7: Stop the interval after 10 requests
  if (counter > 150) {
    clearInterval(intervalId);
  }
}, 1000);

// SCHEDULE THE CREATION OF A DOM ELEMENT
// Step 1: Use setTimeout to schedule the creation of a promotion message after 3 seconds
setTimeout(() => {
  // Step 2: Create a new DOM element for the promotion message
  const promotionMessage = document.createElement('div');

  // Step 3: Add some text to the promotion message
  promotionMessage.textContent =
    'Special Offer: Get 20% off your next purchase!';

  // Step 4: Use Tailwind CSS to style the message
  promotionMessage.className =
    'bg-red-500 text-white p-4 rounded-lg shadow-lg max-w-md mx-auto';

  // Step 5: Append the new element to the 'message-container' div
  const messageContainer = document.getElementById('message-container');
  messageContainer.appendChild(promotionMessage);
}, 3000);
