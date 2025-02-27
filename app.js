// Capturar la información del usuario
const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

// Mostrar el mensaje personalizado
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

// Preguntar si le gusta el lenguaje
let respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

// Validar la respuesta
while (respuesta !== "1" && respuesta !== "2") {
    respuesta = prompt("Por favor, responde solo con 1 o 2.");
}

// Mostrar el mensaje final según la respuesta
if (respuesta === "1") {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}