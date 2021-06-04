function acumulado(a,b){//ay b son parámetros (o variables) y son "representativos"

    console.log(a+b);
}
acumulado(15,24); //15 y 23 son argumentos y son "datos reales"
acumulado (500,810); //Puedo ir cambiando los valosres sumando cantidades más complejas.

function registrar (nombre, apellido){
    console.log(`El alumno es:${nombre} ${apellido}`)
}
registrar("Jose", "Serrano");
registrar("Andrés");//Sacará por consola el nombre y como apellido valor indefinido


function almacenar(usuario='', teléfono=''){
    console.log(`Hola ${usuario}, ${teléfono}te has registrado en...`);
}
almacenar();//Se verá desconocido sin el siguiente argumento por que es una cadena vacía

function direccion (d=''){
console.log("Calle nueva, 20")
}
direccion();