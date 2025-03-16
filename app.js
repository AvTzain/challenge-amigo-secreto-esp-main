// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Empezamos con Mensaje que indique: Bienvenido al Juego de Amigo Secreto.

alert ('Bienvenido al Sorteo de el Amigo Secreto');
console.log("Bienvenida");

//Inicio de el juego

let entradaAmigos = document.getElementById
("amigo");
let listaAmigos = [];
let listadoDeAmigos = document.getElementById
("listaAmigos");
let Resultado = document.getElementById("resultado");

function agregarAmigo() {
    if (entradaAmigos.value == ""){
        alert("Ingresa un nombre para continuar");
    }
    listaAmigos.push(entradaAmigos.value);    
    listadoDeAmigos.innerHTML +=(`<li>${entradaAmigos.value}</li>`);
};

function sortearAmigo() {
    let sorteoDeAmigos =Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[sorteoDeAmigos];
    
    listaAmigos[sorteoDeAmigos];
    console.log(sorteoDeAmigos);

    Resultado.innerHTML = (`<li>El amigo Secreto es: ${amigoSecreto}</li>`);
};

//terminado