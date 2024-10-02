let btn = document.querySelector('#btn');
let weatherIcon = document.querySelector('#weatherIcon');
let error = document.querySelector('#error');

const apiKey = "5164b305ddbf622713dd8a699b59b67e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather() {
  let city = document.querySelector('#input').value;

  // Check for empty input
  if (city == '') {
    alert("Enter a City Name");
    return; // Stop execution
  }

  try {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
      error.style.display = 'block';
      document.querySelector('#weather').style.display = "none";
      return; // Stop further execution
    }

    let data = await response.json();
    
    // Update UI with fetched data
    document.querySelector('#cityName').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('#humidity').innerHTML = data.main.humidity + " %";
    document.querySelector('#wind').innerHTML = data.wind.speed + 'km/h';

    // Weather icon based on conditions
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = 'clouds.png';
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = 'clear.png';
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = 'rain.png';
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = 'drizzle.png';
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = 'mist.png';
    }

    document.querySelector('#weather').style.display = "block";
    error.style.display = 'none';

  } catch (error) {
    alert("Something went wrong. Please try again later.");
    console.log(error);
  }
}

// Add event listener for button click
btn.addEventListener('click', checkWeather);

// Add event listener for pressing Enter key
document.querySelector('#input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    checkWeather();
  }
});
