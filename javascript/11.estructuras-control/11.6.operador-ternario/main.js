/* //Finalizar compra
const autenticado= true;
const saldo=true;
 *///No puede continuar

const autenticado=false;
const saldo=true;


console.log(autenticado && saldo ?"continua para finalizar tu compra":"no puedes continuar");
//ternario anidado

const autenticado1=false;
const saldo1=true;

console.log(autenticado1? saldo1? 'continua para finalizar tu compra' : 'debes autenticarte para poder continuar' : ' debes tener saldo suficiente para continuar') 