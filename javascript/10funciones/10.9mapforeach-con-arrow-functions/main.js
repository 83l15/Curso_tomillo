/*Array de objetos*/
const alumnos=[
    {nombre:"Laura" , edad:16},
    {nombre:"Camila" , edad:14},
    {nombre:"Violeta" , edad:12},
    {nombre:"Gabi", edad:12},
    {nombre:"Miguel", edad:16},
    {nombre:"Juan", edad:16},
]
console.log(alumnos.length); //longitud del array 
console.table(alumnos);

//Nuevo array con map solo con edades 
const alumnosEdad=alumnos.map(persona=>`${persona.edad}`);
console.log(alumnosEdad);

const alumnosEdad1= alumnos.map(function(persona){
    console.log(persona.edad);
})

//nuevo array con forEach solamente los nombres 

const alumnosNombre=alumnos.forEach(persona =>{
    console.log(`${persona.nombre}`) 
     
})


//Nos indica que es un metodo que llama a la función flecha(en este caso) Matriz