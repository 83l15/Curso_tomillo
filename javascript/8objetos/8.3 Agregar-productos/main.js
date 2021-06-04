const elemento={
    nombre:"Iphone",
    precio:1000,
    stock:true,
}
console.table(elemento);
console.log('++++++++++++++++++++++++++++++++++++++++++++++++')

elemento.garantia="2años";

console.table(elemento);
console.log('++++++++++++++++++++++++++++++++++++++++++++++++')

delete elemento.precio;
console.table(elemento);