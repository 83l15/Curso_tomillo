// Trabajamos con contenedores que guardan información

const escribeTuNombre = prompt('Cual es tu nombre?');

// Capturo la variable prompt y trabajo con ella.Es una interpolacion

document.querySelector('#primer-programa').innerHTML = `${escribeTuNombre}!! Has escrito tu primer hola mundo en javascript.`;