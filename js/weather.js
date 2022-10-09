const API_KEY = "e863e6fb4cbaa243b046ca1ac755f728";
let locAvail = false;

function getWeather(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url).then(response => response.json()).then(data => {
		const weather = document.querySelector("#weather span:first-child");
		const city = document.querySelector("#weather span:last-child");
		city.innerText = data.name;
		weather.innerText = `${data.weather[0].main} / ${data.main.temp}ºC`;
	});
	console.log("got the weather data");
}

function onGeoError() {
	alert("Can't find location");
}

navigator.geolocation.getCurrentPosition(getWeather, onGeoError);

