const usuario=true;
const edad=18;

if (usuario ===true && edad >= 18) {
    console.log("puedes darte de alta")
} else if (!usuario && edad >=18){
    console.log("debes indicar tu usuario");
} else if (usuario=== true && edad <18){
    console.log("debes ser mayor de 18 años");
}