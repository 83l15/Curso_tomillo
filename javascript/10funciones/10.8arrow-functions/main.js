const primera=function(){
    console.log("funcion tradicional");
    return"mi primera funcion tradicional";
}
let guardarPrimera = document.getElementById("primera").innerHTML=primera();
primera();

const segunda=()=>"mi primera arrow functions";
let guardarSegunda=document.getElementById("segunda").innerHTML=segunda();

const tercera=function(tipoFuncion){
    console.log(`funcion de tipo:${tipoFuncion}`);
}
const cuarta =tipoFuncion=>{
    console.log(`funcion de tipo:${tipoFuncion}`)
}
cuarta("arrow functions");