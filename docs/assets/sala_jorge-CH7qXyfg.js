import{A as e}from"./aframe-master-BqMUpO3Y.js";import"./index-D66LEcnl.js";e.registerComponent("go-back",{init:function(){this.el.addEventListener("click",()=>{window.history.back()})}});window.showPopupSlasher=function(){const t=document.getElementById("popup-slashermovies");t&&(t.style.display="block")};window.hidePopupSlasher=function(){const t=document.getElementById("popup-slashermovies");t&&(t.style.display="none")};window.showPopupDindom=function(){const t=document.getElementById("popup-dindom");t&&(t.style.display="block")};window.hidePopupDindom=function(){const t=document.getElementById("popup-dindom");t&&(t.style.display="none")};window.showPopupBubbles=function(){const t=document.getElementById("popup-bubbles");t&&(t.style.display="block")};window.hidePopupBubbles=function(){const t=document.getElementById("popup-bubbles");t&&(t.style.display="none")};e.registerComponent("ghost-globo-message",{init:function(){this.el.addEventListener("click",()=>{const t=document.getElementById("ghost-globo-text");t&&(t.setAttribute("visible","true"),setTimeout(()=>{t.setAttribute("visible","false")},1e4))})}});e.registerComponent("sadghost-message",{init:function(){this.el.addEventListener("click",()=>{const t=document.querySelector("#sadghost-text");t.setAttribute("visible","true"),setTimeout(()=>{t.setAttribute("visible","false")},8e3)})}});e.registerComponent("cat-message",{init:function(){this.el.addEventListener("click",()=>{const t=document.querySelector("#cat-text");t&&(t.setAttribute("visible","true"),setTimeout(()=>{t.setAttribute("visible","false")},6e3))})}});e.registerComponent("spider-message",{init:function(){this.el.addEventListener("click",()=>{const t=document.querySelector("#spider-text");t&&(t.setAttribute("visible","true"),setTimeout(()=>{t.setAttribute("visible","false")},9e3))})}});e.registerComponent("ghost-don-message",{init:function(){this.el.addEventListener("click",()=>{const t=document.querySelector("#ghost-don-text");t&&(t.setAttribute("visible","true"),setTimeout(()=>{t.setAttribute("visible","false")},8e3))})}});e.registerComponent("ghost-boy-message",{init:function(){this.el.addEventListener("click",()=>{const t=document.querySelector("#ghost-boy-text");t&&(t.setAttribute("visible","true"),setTimeout(()=>{t.setAttribute("visible","false")},7e3))})}});e.registerComponent("ghost-tophat-message",{init:function(){this.el.addEventListener("click",()=>{const t=document.querySelector("#tophat-response");t&&(t.setAttribute("visible","true"),setTimeout(()=>{t.setAttribute("visible","false")},7e3))})}});e.registerComponent("cute-ghost-message",{init:function(){this.el.addEventListener("click",()=>{const t=document.querySelector("#cute-ghost-text");t&&(t.setAttribute("visible","true"),setTimeout(()=>{t.setAttribute("visible","false")},9e3))})}});function s(t){const i=document.getElementById(t);i&&(i.style.display="block")}function o(t){const i=document.getElementById(t);i&&(i.style.display="none")}e.registerComponent("open-popup",{schema:{popupId:{type:"string"}},init:function(){this.el.addEventListener("click",()=>{s(this.data.popupId)}),this.el.addEventListener("triggerdown",()=>{s(this.data.popupId)})}});e.registerComponent("close-popup",{schema:{popupId:{type:"string"}},init:function(){this.el.addEventListener("click",()=>{o(this.data.popupId)}),this.el.addEventListener("triggerdown",()=>{o(this.data.popupId)})}});
