//MÉTODO LENGTH

const longitud='con este método cuento los carácteres de este string';
console.log(`esta cadena tiene:`,longitud.length,`caracteres`)

//MÉTODDO INDEXOF 
// El metodo indexof () busca en la matriz el elemento especificado y devuelve su posición.
// La búsqueda empezará en la posición especificada, si no se especifica ninguna posicion finalizara la búsqueda al final de la matriz
console.log('metodo indexOf:');
console.log(longitud.indexOf('este',0))

//MÉTODO includes devuelve un boolean y me indica si el elemento que busqué está o no:

console.log(longitud.includes('este')) //true consola
console.log(longitud.includes('arriba'))//false consola


