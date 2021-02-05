const COORDS = "coords";

function saveCoords(coordsObj){

}

function handleGeoSucces(position){
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude, longitude
	};
	saveCoords
}

function handleGeoError(){
	console.log("cant access geo loaction");
}

function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
	const loadedCords = localStorage.getItem(COORDS);
	if(loadedCords === null){
		askForCoords();
	} else {
		// getWeather
	}
}

function init(){
	loadCoords();
}

init();