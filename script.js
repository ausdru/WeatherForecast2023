var currentTimeDisplay = $("#currentDay");
currentTimeDisplay.text(moment().format('LLLL'));

var apiKey = "edb0164cc2c4574610124804fdf2a553";
var city = "tampa";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

// Make the API call inside an async function
async function makeAPICall() {
    try {
        const response = await fetch(queryURL);
        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        const tempK = data.main.temp; // Temperature in Kelvin
        const tempF = kelvinToFahrenheit(tempK); // Convert to Fahrenheit

        return tempF; // Return the temperature in Fahrenheit
    } catch (error) {
        console.error("An error occurred:", error);
        throw error; // Rethrow the error for handling in the promise chain
    }
}

makeAPICall().then(response => {
    console.log("It's currently", response, "degrees Farenheit in Tampa, Florida.");
});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }