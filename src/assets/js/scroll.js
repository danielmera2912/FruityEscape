// Registra un evento scroll
window.addEventListener("scroll", function() {
  // Obtiene todos los artículos
  var secciones = document.getElementsByClassName("articulo");
  // Obtiene todos los enlaces de la navegación
  var enlaces = document.getElementsByClassName("nav-link");
  
  // Se recorren todas las secciones
  for(var i = 0; i < secciones.length; i++) {
    // Verifica si la sección actual está a menos de 100 vh del borde superior de la pantalla
    if(secciones[i].getBoundingClientRect().top <= 100) {
      // Si se cumple la condición, se elimina la clase activa de todos los enlaces de la navegación
      for(var j = 0; j < enlaces.length; j++) {
        enlaces[j].classList.remove("activa");
      }
      // Agrega la clase activaa al enlace del menú de navegación actual
      enlaces[i].classList.add("activa");
    }
  }
});