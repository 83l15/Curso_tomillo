const start={
      cargando:function (){
      console.log("espere...")
      return "espere mientras se carga la página..."
  },
  dentro:function(){
    //   console.log("dentro...")
      return "accediendo a la página"
  },
}
let cargar=document.getElementById('uno').innerHTML=start.cargando();
let entrar=document.getElementById('dos').innerHTML=start.dentro();

//agregar una propiedad después de que el código se haya ejecutado:
start.salir=function(nombre){
    console.log(`saliendo de... ${nombre}`);
    return'exit...'
    
}
let exit=document.querySelector('button').innerHTML=start.salir('hhhh');

start.salir('mi página...')

