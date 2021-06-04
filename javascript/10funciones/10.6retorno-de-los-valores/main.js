function sumar(a,b){
    return a+b;// ya no pongo console.log sino la palabra return
}
const total =sumar(2,3);//al poner return siempre debo almacenar el dato de los argumentos en una variables
console.log(total);

let compra =0;

function seleccionar (producto){
    return compra +=producto;
}

let acumular =seleccionar (500);
acumular=seleccionar (500);
console.log(acumular);

function iva (compra){
    return compra*1.04;
}

let acumuladoImpuesto=iva(compra);
console.log(`El valor del total de la compra con IVA es: ${acumuladoImpuesto}`);

//Descuentos o Decrementar

let compra2=0;
function escoger (articulo){
    return compra2+=articulo;
}
let acumulado =escoger(300);
acumulado =escoger (700);
console.log(acumulado);

function dto (compra2){
    return compra2 *0.96
}
total2=dto(compra2);
console.log(`El valor de la compra2 con el 4%de descuento de de ${total2}`);