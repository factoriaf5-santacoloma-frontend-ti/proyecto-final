import"./aframe-master-BqMUpO3Y.js";import"./index-D66LEcnl.js";const l=document.querySelector("a-scene"),a=document.querySelector("a-plane"),u=[],p=document.querySelectorAll(".clickable");p.forEach(t=>{t.addEventListener("click",function(){window.open(t.getAttribute("href"),"_blank")})});const d={x:0,y:-.045,z:-3};function b(t,n=2){const e=t.x-d.x,i=t.z-d.z;return Math.sqrt(e*e+i*i)<n||u.some(o=>{const s=t.x-o.x,r=t.z-o.z;return Math.sqrt(s*s+r*r)<n})}function m(t,n=2){const e=t.getAttribute("width"),i=t.getAttribute("height"),c=t.getAttribute("position");let o,s=0;do{const r=c.x+(Math.random()*e-e/2),h=c.z+(Math.random()*i-i/2);o={x:r,y:c.y,z:h},s++}while(b(o,n)&&s<100);return s<100&&u.push(o),o}function f(t){for(let n=0;n<t;n++){const e=document.createElement("a-entity");e.setAttribute("gltf-model","#flowers"),e.setAttribute("scale","0.010 0.010 0.010");const{x:i,y:c,z:o}=m(a,2);e.setAttribute("position",`${i} ${c+.1} ${o}`),l.appendChild(e)}}function x(t){for(let n=0;n<t;n++){const e=document.createElement("a-entity");e.setAttribute("gltf-model","#mushrooms"),e.setAttribute("scale","0.020 0.020 0.020");const{x:i,y:c,z:o}=m(a,3);e.setAttribute("position",`${i} ${c+.1} ${o}`),l.appendChild(e)}}f(35);x(20);
