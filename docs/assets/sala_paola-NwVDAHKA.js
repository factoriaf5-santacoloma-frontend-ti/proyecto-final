import{A as o}from"./aframe-master-BqMUpO3Y.js";import"./index-D66LEcnl.js";o.registerComponent("link-on-click",{schema:{type:"string"},init:function(){this.el.addEventListener("click",()=>{window.location.href=this.data})}});o.registerComponent("toggle-text",{schema:{groupId:{type:"selector"}},init:function(){const t=this.el,e=this.data.groupId;t.addEventListener("click",()=>{if(e){const i=e.getAttribute("visible")===!0||e.getAttribute("visible")==="true";e.setAttribute("visible",!i),console.log(`Grupo ahora es ${i?"oculto":"visible"}`)}else console.error("No se encontró el grupo asociado.")})}});const n=document.querySelectorAll(".interactable");n.forEach(t=>{t.addEventListener("click",function(){console.log("Interactive element clicked!")})});