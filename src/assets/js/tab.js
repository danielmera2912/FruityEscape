'use strict'

const li = document.querySelectorAll('.li')
const bloque = document.querySelectorAll('.bloque')
// se recorren todos los elementos
li.forEach((elemento, i) => {
    // se asigna un click al elemento
    li[i].addEventListener('click', () => {
        // se recorren todos los elementos
        li.forEach((elemento, i) => {
            // se quita la clase activo de cada elemento
            li[i].classList.remove('activo')
            // se quita la clase activo del bloqie
            bloque[i].classList.remove('activo')
        })
        // se asigna al elemento que se ha hecho click como activo
        li[i].classList.add('activo')
        // se asigna al bloque de la misma posicion del que se ha hecho click como activo
        bloque[i].classList.add('activo')

    })
})