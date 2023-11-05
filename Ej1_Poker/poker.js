// array que contiene las cartas, se ha añadido un valor para cada carta para poder compararlas en la funcion
var cartas = [
    { imagen: "cards/10_of_clubs.png", valor: '10' },
    { imagen: "cards/10_of_diamonds.png", valor: '10' },
    { imagen: "cards/10_of_hearts.png", valor: '10' },
    { imagen: "cards/10_of_spades.png", valor: '10' },
    { imagen: "cards/2_of_clubs.png", valor: '2' },
    { imagen: "cards/2_of_diamonds.png", valor: '2' },
    { imagen: "cards/2_of_hearts.png", valor: '2' },
    { imagen: "cards/2_of_spades.png", valor: '2' },
    { imagen: "cards/3_of_clubs.png", valor: '3' },
    { imagen: "cards/3_of_diamonds.png", valor: '3' },
    { imagen: "cards/3_of_hearts.png", valor: '3' },
    { imagen: "cards/3_of_spades.png", valor: '3' },
    { imagen: "cards/4_of_clubs.png", valor: '4' },
    { imagen: "cards/4_of_diamonds.png", valor: '4' },
    { imagen: "cards/4_of_hearts.png", valor: '4' },
    { imagen: "cards/4_of_spades.png", valor: '4' },
    { imagen: "cards/5_of_clubs.png", valor: '5' },
    { imagen: "cards/5_of_diamonds.png", valor: '5' },
    { imagen: "cards/5_of_hearts.png", valor: '5' },
    { imagen: "cards/5_of_spades.png", valor: '5' },
    { imagen: "cards/6_of_clubs.png", valor: '6' },
    { imagen: "cards/6_of_diamonds.png", valor: '6' },
    { imagen: "cards/6_of_hearts.png", valor: '6' },
    { imagen: "cards/6_of_spades.png", valor: '6' },
    { imagen: "cards/7_of_clubs.png", valor: '7' },
    { imagen: "cards/7_of_diamonds.png", valor: '7' },
    { imagen: "cards/7_of_hearts.png", valor: '7' },
    { imagen: "cards/7_of_spades.png", valor: '7' },
    { imagen: "cards/8_of_clubs.png", valor: '8' },
    { imagen: "cards/8_of_diamonds.png", valor: '8' },
    { imagen: "cards/8_of_hearts.png", valor: '8' },
    { imagen: "cards/8_of_spades.png", valor: '8' },
    { imagen: "cards/9_of_clubs.png", valor: '9' },
    { imagen: "cards/9_of_diamonds.png", valor: '9' },
    { imagen: "cards/9_of_hearts.png", valor: '9' },
    { imagen: "cards/9_of_spades.png", valor: '9' },
    { imagen: "cards/ace_of_clubs.png", valor: 'ace' },
    { imagen: "cards/ace_of_diamonds.png", valor: 'ace' },
    { imagen: "cards/ace_of_hearts.png", valor: 'ace' },
    { imagen: "cards/ace_of_spades.png", valor: 'ace' },
    { imagen: "cards/ace_of_spades2.png", valor: 'ace' },
    { imagen: "cards/black_joker.png", valor: 'joker' },
    { imagen: "cards/jack_of_clubs.png", valor: 'jack' },
    { imagen: "cards/jack_of_clubs2.png", valor: 'jack' },
    { imagen: "cards/jack_of_diamonds.png", valor: 'jack' },
    { imagen: "cards/jack_of_diamonds2.png", valor: 'jack' },
    { imagen: "cards/jack_of_hearts.png", valor: 'jack' },
    { imagen: "cards/jack_of_hearts2.png", valor: 'jack' },
    { imagen: "cards/jack_of_spades.png", valor: 'jack' },
    { imagen: "cards/jack_of_spades2.png", valor: 'jack' },
    { imagen: "cards/king_of_clubs.png", valor: 'king' },
    { imagen: "cards/king_of_clubs2.png", valor: 'king' },
    { imagen: "cards/king_of_diamonds.png", valor: 'king' },
    { imagen: "cards/king_of_diamonds2.png", valor: 'king' },
    { imagen: "cards/king_of_hearts.png", valor: 'king' },
    { imagen: "cards/king_of_hearts2.png", valor: 'king' },
    { imagen: "cards/king_of_spades.png", valor: 'king' },
    { imagen: "cards/king_of_spades2.png", valor: 'king' },
    { imagen: "cards/queen_of_clubs.png", valor: 'queen' },
    { imagen: "cards/queen_of_clubs2.png", valor: 'queen' },
    { imagen: "cards/queen_of_diamonds.png", valor: 'queen' },
    { imagen: "cards/queen_of_diamonds2.png", valor: 'queen' },
    { imagen: "cards/queen_of_hearts.png", valor: 'queen' },
    { imagen: "cards/queen_of_hearts2.png", valor: 'queen' },
    { imagen: "cards/queen_of_spades.png", valor: 'queen' },
    { imagen: "cards/queen_of_spades2.png", valor: 'queen' },
    { imagen: "cards/red_joker.png", valor: 'joker' }
];


var ventanaJuego; // variable global para poder cerrar la ventana desde cualquier funcion

function playPoker() {
    var cartasElegidas = [];
    var cartasRestantes = [...cartas]; // ... se utiliza para copiar un array

    // generar 5 cartas aleatorias
    while (cartasElegidas.length < 5) {
        var indice = Math.floor(Math.random() * cartasRestantes.length);
        cartasElegidas.push(cartasRestantes[indice]);
        cartasRestantes.splice(indice, 1); // splice elimina un elemento del array
    }

    // comprobar si hay una pareja
    var tienePareja = compruebaPareja(cartasElegidas);

    // muestra cartas y el resultado
    mostrarSolucion(cartasElegidas, tienePareja);
}


function compruebaPareja(cartasElegidas) {
    // recorrer todas las cartas y compararlas con las demas, -1 para que no se compare con si misma
    for (var i = 0; i < cartasElegidas.length - 1; i++) {
        // segundo bucle para comparar la carta i con las demas, viene siendo algo parecido ap algoritmo de burbuja
        for (var j = i + 1; j < cartasElegidas.length; j++) {
            // si el valor de la carta i es igual al valor de la carta j, entonces hay una pareja
            if (cartasElegidas[i].valor === cartasElegidas[j].valor) {
                return true;
            }
        }
    }
    return false;
}


// funcion que muestra la ventana con las cartas elegidas y el resultado. al darle a refrescar 
// se vuelve a ejecutar la funcion playPoker pero una debajo de otra (no se ha encontrado otra solucion)

function mostrarSolucion(cartasElegidas, tienePareja) {
    var resultado = "No tienes una combinación ganadora. Suerte la próxima amigo";
    if (tienePareja) {
        resultado = "Tienes una pareja! ¡Has ganado, siuuuu!";
    }

    ventanaJuego = window.open("", "Juego de Poker", "width=800, height=300");
    
    var imagenes = "";
    // bucle necesario para mostrar las cartas elegidas
    for (var i = 0; i < cartasElegidas.length; i++) {
        imagenes += "<img src='" + cartasElegidas[i].imagen + "' width='100' height='150' />";
    }
    // se escribe el html en la ventana
    ventanaJuego.document.write(`
        <html>
        <head><title>Juego de Poker</title></head>
        <body>
            <h1>¡Bienvenido al juego de Poker!</h1>
            <p>Cartas Elegidas:</p>
            ${imagenes}
            <p>${resultado}</p>
            <button onclick="window.close()">Cerrar</button>
            <button onclick="window.opener.playPoker()">Volver a jugar</button>
        </body>
        </html>
    `);
}

// funcion que cierra todas las ventanas
function cerrarTodo() {
    ventanaJuego.close();
    window.close();
}