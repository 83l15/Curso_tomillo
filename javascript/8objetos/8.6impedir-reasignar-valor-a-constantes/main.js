"use strict"
    const alumno={
        nombre:"Camilo",
        apellido:"Lopez",
        edad:24,
        aprobar:false
    }
    console.table(alumno);
    object.freeze(alumno);
    alumno.aprobar=true;
    console.log(alumno);