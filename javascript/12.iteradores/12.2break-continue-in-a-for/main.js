//break:corta la ejecucuión de un for();
//continue:permite interceptar un elemento, identificarlo y continuar su ejecución
for(let i = 0; i <20; i++){
    if(i===10) {
        console.log("he llegado al número 10");
        break; //finaliza el bucle de contar de 10 en adelante
    }
    console.log(i);
}
console.log('*************')

//Continue
for(let i=0; i<15; i++){
    if(i===7){
        console.log(`has llegado al numero ${i}`);
        continue;
    }
    console.log('');
}

const articulos=[

    {nombre:"champu", precio:2, descuento :true},
    {nombre:"champu", precio:2 },
    {nombre:"champu", precio:2},
    {nombre:"champu", precio:2, descuento:true},
];
for(let i=0; i< articulos.length; i++){
    if(articulos[i].descuento){
        console.log(`el articulo ${articulos[i].nombre} tiene descuento`);
        continue;
    }
    console.log(articulos[i].nombre)
} 