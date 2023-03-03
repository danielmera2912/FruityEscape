"use strict";
const imagen = document.querySelector(".carrusel__imagenes");
const punto = document.querySelectorAll(".punto");
// se recorren los puntos
punto.forEach((cadaPunto, i)=>{
    // asignamos un click a cada punto que hay
    punto[i].addEventListener("click", ()=>{
        // se guarda la posición del punto
        let posicion = i;
        // se calcula el desplazamiento
        let operacion = posicion * -33.33;
        // se realiza el movimiento de la imagen
        imagen.style.transform = `translateX(${operacion}%)`;
        // se recorren los puntos
        punto.forEach((cadaPunto, i)=>{
            // se quita la etiqueta activo de dichos puntos
            punto[i].classList.remove("activo");
        });
        // se añade el punto que se le ha hecho click como activo
        punto[i].classList.add("activo");
    });
});

//# sourceMappingURL=index.4758f6af.js.map
