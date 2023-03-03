"use strict";const imagen=document.querySelector(".carrusel__imagenes"),punto=document.querySelectorAll(".punto");punto.forEach(((t,e)=>{punto[e].addEventListener("click",(()=>{let t=-33.33*e;imagen.style.transform=`translateX(${t}%)`,punto.forEach(((t,e)=>{punto[e].classList.remove("activo")})),punto[e].classList.add("activo")}))}));
//# sourceMappingURL=index.02625ce1.js.map
