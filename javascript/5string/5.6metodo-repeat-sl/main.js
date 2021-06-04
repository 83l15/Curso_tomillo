//Método repeat: permite repetir una cadena de texto solo con números enteros.
const alumno='Pepe:';
const asistencia='ok ';
console.log(asistencia.repeat(5));
console.log(`${alumno} ${asistencia}`.repeat(5));
document.querySelector('button').innerHTML=`${alumno}${asistencia}`.repeat(5)

//Método split me permite dividir los caracteres o palabraas por un string

const curvaFrontend='html css javascript react'
console.log(curvaFrontend.split(" "));//Con un espacio divide por palabras
console.log(curvaFrontend.split(""));// separa por letras deletrear

document.querySelector('h2').innerHTML=`${curvaFrontend.split(" ")}`;
document.querySelector('h3').innerHTML=`${curvaFrontend}`;