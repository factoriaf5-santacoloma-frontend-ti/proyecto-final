import{A as i}from"./aframe-master-BqMUpO3Y.js";import"./index-D66LEcnl.js";import"./aframe-event-set-component-DHGj5HhW.js";i.registerComponent("message-handler",{schema:{target:{type:"selector"},duration:{type:"number",default:5e3}},init:function(){const e=this.el,t=this.data.target;if(!t){console.error("No se encontró el texto asociado.");return}e.addEventListener("click",()=>{t.setAttribute("visible",!0),setTimeout(()=>{t.setAttribute("visible",!1)},this.data.duration)})}});document.addEventListener("DOMContentLoaded",()=>{[{modelId:"#robot-model",textId:"#text-robot",duration:1e4},{modelId:"#hacker-model",textId:"#text-cybersecurity",duration:8e3},{modelId:"#computer-model",textId:"#text-cybersecurity",duration:8e3},{modelId:"#candado-model",textId:"#text-cybersecurity",duration:8e3},{modelId:"#man-in-vr-model",textId:"#text-metaverse",duration:9e3},{modelId:"#vr-thinker-model",textId:"#text-metaverse",duration:9e3}].forEach(({modelId:t,textId:o,duration:s})=>{const r=document.querySelector(t);r?r.setAttribute("message-handler",`target: ${o}; duration: ${s}`):console.warn(`No se encontró el modelo ${t}`)})});i.registerComponent("toggle-text",{schema:{target:{type:"selector"}},init:function(){const e=this.el,t=this.data.target;if(!t){console.error("No se encontró el texto asociado.");return}e.addEventListener("click",()=>{const o=t.getAttribute("visible")===!0||t.getAttribute("visible")==="true";t.setAttribute("visible",!o)})}});i.registerComponent("toggle-text",{schema:{target:{type:"selector"}},init:function(){const e=this.el,t=this.data.target;if(!t){console.error("No se encontró el texto asociado.");return}e.addEventListener("click",()=>{const o=t.getAttribute("visible")===!0||t.getAttribute("visible")==="true";t.setAttribute("visible",!o)})}});i.registerComponent("toggle-text",{schema:{target:{type:"selector"}},init:function(){const e=this.el,t=this.data.target;if(!t){console.error("No se encontró el texto asociado.");return}e.addEventListener("click",()=>{const o=t.getAttribute("visible")===!0||t.getAttribute("visible")==="true";t.setAttribute("visible",!o)})}});i.registerComponent("dancing-robot-message",{init:function(){this.el.addEventListener("click",()=>{const e=document.querySelector("#dancing-robot-text");e&&(e.setAttribute("visible","true"),setTimeout(()=>{e.setAttribute("visible","false")},5e3))})}});
