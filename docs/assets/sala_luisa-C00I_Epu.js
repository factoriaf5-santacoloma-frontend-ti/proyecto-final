import"./aframe-master-BhSxa4se.js";const d=document.querySelector("a-scene"),l=document.querySelector("a-plane"),m=[],h=document.querySelectorAll(".clickable");h.forEach(e=>{e.addEventListener("click",function(){window.open(e.getAttribute("href"),"_blank")})});const u={x:0,y:-.045,z:-3};function p(e,o=2){const t=e.x-u.x,i=e.z-u.z;return Math.sqrt(t*t+i*i)<o||m.some(n=>{const s=e.x-n.x,r=e.z-n.z;return Math.sqrt(s*s+r*r)<o})}function a(e,o=2){const t=e.getAttribute("width"),i=e.getAttribute("height"),c=e.getAttribute("position");let n,s=0;do{const r=c.x+(Math.random()*t-t/2),b=c.z+(Math.random()*i-i/2);n={x:r,y:c.y,z:b},s++}while(p(n,o)&&s<100);return s<100&&m.push(n),n}function f(e){for(let o=0;o<e;o++){const t=document.createElement("a-entity");t.setAttribute("gltf-model","#flowers"),t.setAttribute("scale","0.010 0.010 0.010");const{x:i,y:c,z:n}=a(l,2);t.setAttribute("position",`${i} ${c+.1} ${n}`),d.appendChild(t)}}function x(e){for(let o=0;o<e;o++){const t=document.createElement("a-entity");t.setAttribute("gltf-model","#tree"),t.setAttribute("scale","15 15 15");const{x:i,y:c,z:n}=a(l,5);t.setAttribute("position",`${i} ${c+.1} ${n}`),d.appendChild(t)}}function A(e){for(let o=0;o<e;o++){const t=document.createElement("a-entity");t.setAttribute("gltf-model","#mushrooms"),t.setAttribute("scale","0.020 0.020 0.020");const{x:i,y:c,z:n}=a(l,3);t.setAttribute("position",`${i} ${c+.1} ${n}`),d.appendChild(t)}}f(25);x(8);A(15);
