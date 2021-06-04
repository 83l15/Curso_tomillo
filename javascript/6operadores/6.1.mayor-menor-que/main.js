const numero1 =50;
const numero2="50";
const numero3=70;

//Operador mayor que
console.log(numero1>numero3);
console.log(numero3>numero1);
//Operador menor que
console.log (numero1<numero3);
console.log(numero3<numero1);

//Comparar siempre con triple valor igual que es el comparador estricto porque antes de decir si es true or ffalse nos revisa si el tipo de dato es el mismo
console.log(numero1==numero2);//true por que es un numero encapsulado en texto
console.log(numero1===numero2);//false por que lo toma estrictamente como texto
//para que la variable nº1 y la variable nº2 sean iguales podemos convertir la variable 2 en un numero
console.log(numero1===parseInt(numero2))

//Comparar para saber si el resultado es diferente, por ejemplo si quiero comprobar que el usuario esté logueado correctamente
const password="admin";
const compruebaTuPassword="Admin";
console.log(password != compruebaTuPassword);
console.log(numero1 !==numero2);
console.log(numero1 != numero2);