let w = document.querySelector(".w");
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

function getWeather() {
    w.innerHTML = '<h2>Loading...</h2>'
    event.preventDefault();
    let input = document.querySelector(".in").value;
    console.log(input)
    fetchWeather(input);
}

async function fetchWeather(city) {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    return showWeather(data);
}

let showWeather = (data) => {
    if (data.cod == "404") {
        w.innerHTML = '<h2>City not found</h2>'
        return;
    }
    w.innerHTML = `<div class="image"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></div><div class="temperature"><h2>${data.main.temp}°C</h2><h2>${data.weather[0].main}</h2></div>`;
}
