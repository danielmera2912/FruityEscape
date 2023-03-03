"use strict";const li=document.querySelectorAll(".li"),bloque=document.querySelectorAll(".bloque");li.forEach(((l,e)=>{li[e].addEventListener("click",(()=>{li.forEach(((l,e)=>{li[e].classList.remove("activo"),bloque[e].classList.remove("activo")})),li[e].classList.add("activo"),bloque[e].classList.add("activo")}))}));
//# sourceMappingURL=index.b9c22429.js.map
