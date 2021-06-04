//JavaScript si tendrá en cuenta que no todos los valores de estas variables son numeros pero al saberlo el programdor puede aplicar estas conversiones

const numero1="1";
console.log(typeof numero1);//La consola me indicara que es un string

//Convirtiendo el string(cadena de texto) en numero entero

console.log(Number.parseInt(numero1));// la consola no sacará un string sino el numero 1 (en este caso)

//Convertir el strin en Nºdecimal
const numero2= "5.2";
console.log(Number.parseFloat(numero2));// resultado consola 5.2

const numero3="catorce";
console.log(Number.parseInt (numero3))//Not are number NaN

const numero4 = 4;
console.log(Number.isInteger(numero4));

console.log(Number.isInteger(numero3));
console.log(Number.isInteger(numero1));
