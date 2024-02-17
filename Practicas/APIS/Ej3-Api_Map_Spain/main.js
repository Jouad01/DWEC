const errorElement = document.getElementById("error");

function allowDrop(ev) {
    ev.preventDefault();
}


function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.getAttribute("data-comunidad"));
}



function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/plain");
    const imageComunidad = data;
    const areaComunidad = ev.target.getAttribute("data-comunidad");

    var coords = ev.target.coords.split(',');
    var xRelacion = parseInt(coords[0], 10);
    var yRelacion = parseInt(coords[1], 10);

    if (imageComunidad === areaComunidad) {
        errorElement.style.display = "none";
        const newImage = new Image();
        newImage.src = `assets/img/${imageComunidad}.png`;
        newImage.style.top = `${yRelacion}px`;
        newImage.style.left = `${xRelacion}px`;
        newImage.style.position = "absolute";

        // Agrega la nueva imagen al contenedor .container
        document.querySelector('.container').appendChild(newImage);
    } else {
        errorElement.style.display = "block";
    }
}

