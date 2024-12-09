AFRAME.registerComponent("play",{
    init: function(){
        const myEl = document.querySelector("#sound-car");
        this.el.addEventListener("click", function (){
            myEl.components.sound.playSound();
        });
    }
    });
    
    
    AFRAME.registerComponent("stop",{
        init: function(){
            const myEl = document.querySelector("#sound-car");
            this.el.addEventListener("click", function (){
                myEl.components.sound.stopSound();
            });
        }
        });