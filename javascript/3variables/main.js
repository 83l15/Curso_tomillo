// 1.-Aunque una variable se puede llamar con letras y números, no debe empezar con números
let empezar="Esta es mi primera variable"
console.log(empezar);
document.querySelector(".variables-ejemplo"). innerHTML=`${empezar}`;

// 2.-JavaScript es debilmente tipado, quiere deciir que la variable empezó siendo un string y ahora la convierto en número y tampoco requiere que le escriba a la variable que tipo es 
empezar= 4; 
console.log(empezar);
document.querySelector(".variables-ejemplo").innerHTML=`Ahora mi variable empezar vale: ${empezar}` 
// 3.- Otra característica de las variables de js es que son sensibles a las mayúsculas y minúsculas Nota: No debe empezar por mayúsculas
let empezarDos= 2;
console.log(empezarDos);
// 4.- Las variables deben llamarse con distintos nombres dentro de los archivos de mismo nivel, es decir, no puedo declarar de nuevo a otra variable en otro index de esta misma carpeta con el nombre "empezar"por que este n ombre es de la variable que use al principio:
// empezar=true;
// console.log(empezar);

// LAS VARIABLES CONST:
// 1.No se puede reasignar su valor como con let o var
const numeros=1;
console.log(numeros);
// Las constantes se declaran asignandole un valor