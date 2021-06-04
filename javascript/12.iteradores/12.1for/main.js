/* for(let i=0; i<10; i++){
    console.log(i);

} */

/* for(let i=0; i<20; i++){
    if(i%2==0){
    console.log(`el numero ${i}es par`);
}else{
    console.log(`el numero ${i}es impar`)
}
} */
//recorrer un array elementos
const alumnos=["Natalia", "Javi", "Paco", "David", "Josue", "Alex", "Jeampierre", "Cristian"
];
//mientras la longitud sea menor que la constante aumenta de 1 en 1
console.log(alumnos.legth);
for(let i=0; i<alumnos.length; i++){
    console.log(alumnos[i])
}
//recorrer un array de objetos
const alumnos2=[
     {nombre:"Carla", edad:16},
     {nombre:"Dani", edad:20},
     {nombre:"Ali", edad:18},
     {nombre:"Alejandra", edad:19},
     {nombre:"Violeta", edad:17}
]
console.log(alumnos2.length);
for(let i=0; i<alumnos2.length; i++){
    console.log(alumnos2[i].nombre);
}