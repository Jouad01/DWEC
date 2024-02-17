// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;
// creacion arrrays
let marcadores = [];
let locations = [];


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6,
    });
    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    // ffunciones
                    guardarUbicacion(pos);
                    cargarUbicacion();
                    mostrarCirculo(pos);


                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });

    cargarUbicacion();
}


// Funciones: guardar ubicacion, cargar ubicacion, mostrar ubicacion, mostrar circulo y obtener direccion

function mostrarUbicacion(pos) {
    const marcador = new google.maps.Marker({
        position: pos,
        map: map,
        icon: "location.png",
    });
    marcadores.push(marcador);
    if (marcadores.length > 5) {
        let removedMarker = marcadores.shift();
        removedMarker.setMap(null);
    }
    obtenerDireccion(pos, marcador);
}

function guardarUbicacion(pos) {
    locations.push(pos);
    while (locations.length > 5) {
        locations.shift();
    }
    localStorage.setItem('ubicaciones', JSON.stringify(locations));
    const marcador = mostrarUbicacion(pos);
    obtenerDireccion(pos, marcador);
    cargarUbicacion(); 
    mostrarCirculo(pos);
}


function cargarUbicacion() {
    const cargarLocal = localStorage.getItem('ubicaciones');
    if (cargarLocal) {
        locations = JSON.parse(cargarLocal);
        locations.forEach((pos) => {
            mostrarUbicacion(pos);
        });
    }
}

function mostrarCirculo(pos) {
    const circle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FFFF00",
        fillOpacity: 0.35,
        map,
        center: pos,
        radius: 100,
        accuracy: 100,
    });
}

function obtenerDireccion(pos, marcador) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: pos }, (results, status) => {
        if (status === "OK" && results[0]) {
            new google.maps.InfoWindow({
                content: results[0].formatted_address,
            }).open(map, marcador);
        }
    });
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}

window.initMap = initMap;
