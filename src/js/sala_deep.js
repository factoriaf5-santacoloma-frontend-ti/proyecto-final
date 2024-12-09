<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Jungle Island</title>
    <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/aframe-environment-component/dist/aframe-environment-component.min.js"></script>
    <script src="https://aframe.io/releases/1.2.0/aframe-animation-component.min.js"></script>
</head>

<body>
    <a-scene vr-mode-ui="enabled: true" environment="preset: forest; groundTexture: grass; groundColor: #3B7A57; skyColor: #87CEEB; grid: none;" cursor="rayOrigin: mouse">

        <a-light type="directional" color="#ffffff" intensity="1" position="10 20 10" target="#building"></a-light>
        <a-light type="ambient" color="#aaaaaa" intensity="0.6"></a-light>

        <a-circle id="island" radius="30" color="#3B7A57" position="0 0 0" rotation="-90 0 0"></a-circle>
        
        <a-plane src="https://cdn.aframe.io/a-painter/images/floor.jpg" position="0 0.01 0" rotation="-90 0 0" width="60" height="60" repeat="20 20" material="repeat: true"></a-plane>

        <a-entity position="5 0 0">
            <a-sphere radius="1.5" color="#228B22" position="0 1.5 0"></a-sphere>
            <a-cylinder radius="0.5" height="6" color="#8B4513" position="0 3 0"></a-cylinder>
        </a-entity>
        <a-entity position="-5 0 5">
            <a-sphere radius="1.5" color="#228B22" position="0 1.5 0"></a-sphere>
            <a-cylinder radius="0.5" height="6" color="#8B4513" position="0 3 0"></a-cylinder>
        </a-entity>

        <a-entity id="building" position="0 0 -20">
            <a-box position="0 1 0" width="10" height="20" depth="10" color="#4682B4"></a-box>
            <a-box position="0 2 5" width="1" height="3" depth="1" color="#ADD8E6"></a-box>
            <a-box position="0 5 5" width="1" height="3" depth="1" color="#ADD8E6"></a-box>
            <a-box position="0 8 5" width="1" height="3" depth="1" color="#ADD8E6"></a-box>
            <a-box position="0 11 5" width="1" height="3" depth="1" color="#ADD8E6"></a-box>
            <a-cone position="0 20 0" radius-bottom="8" height="6" color="#B22222"></a-cone>

            <a-box id="door" position="0 1 -5.1" width="2" height="3" depth="0.1" color="#654321" class="clickable"
                event-set__enter="_event: mouseenter; color: #A52A2A;"
                event-set__leave="_event: mouseleave; color: #654321" onclick="openDoor()">
            </a-box>
            <a-text value="Click to Open Door" position="0 5 -5" align="center" color="#FFFFFF" width="10"></a-text>
        </a-entity>

        <a-box position="5 0 -10" width="10" height="0.1" depth="6" color="#1E90FF"></a-box>
        <a-cylinder position="5 0.05 -10" radius="5" height="0.1" color="#B0C4DE" opacity="0.5"></a-cylinder>

        <a-box position="0 1 -5" width="15" height="0.5" depth="2" color="#D2691E"></a-box>
        <a-box position="0 0.25 -4.5" width="1" height="1" depth="1" color="#8B4513"></a-box>

        <a-entity position="10 0 0" id="lion" scale="2 2 2">
            <a-entity gltf-model="https://cdn.aframe.io/test-models/assets/lion/scene.gltf" scale="1 1 1" animation="property: position; to: 12 0 5; dir: alternate; dur: 3000; loop: true; easing: ease-in-out"></a-entity>
        </a-entity>

        <a-sphere position="10 0 0" radius="3" color="#A9A9A9"></a-sphere>
        <a-sphere position="12 0 0" radius="2" color="#A9A9A9"></a-sphere>

        <a-box position="-10 2 5" width="1" height="5" depth="1" color="#A52A2A"></a-box>
        <a-text value="This Way to the Mansion" position="-10 3.5 5.5" align="center" color="#FFFFFF" width="5"></a-text>

        <a-box id="teleport-button" position="0 0.2 10" width="2" height="0.1" depth="2" color="#FFD700"
            class="clickable"
            event-set__enter="_event: mouseenter; color: #FF6347; scale: 1.2 1.2 1.2"
            event-set__leave="_event: mouseleave; color: #FFD700; scale: 1 1 1"
            onclick="document.getElementById('player').setAttribute('position', '0 1.6 -6');">
        </a-box>
        <a-text value="Step here to teleport to the building" position="0 0.8 10" align="center" color="#FFFFFF" width="4"></a-text>

        <a-entity id="player" position="0 1.6 15">
            <a-camera wasd-controls="true" look-controls="true"></a-camera>
        </a-entity>

        <a-entity laser-controls="hand: left" raycaster="objects: .clickable"></a-entity>
        <a-entity laser-controls="hand: right" raycaster="objects: .clickable"></a-entity>

        <a-entity teleport-controls="cameraRig: #player"></a-entity>

        <a-sound src="https://cdn.aframe.io/basic-guide/audio/backgroundnoise.mp3" autoplay="true" loop="true" position="0 1.6 0"></a-sound>
        <a-sound src="https://cdn.aframe.io/basic-guide/audio/jungle.mp3" autoplay="true" loop="true" position="0 1.6 0" volume="0.5"></a-sound>

        <a-animation
            attribute="rotation"
            dur="5000"
            to="0 360 0"
            repeat="indefinite"
            direction="alternate"
            target="#teleport-button">
        </a-animation>

        <script>
            function openDoor() {
                document.getElementById('door').emit('doorClick');
            }
        </script>

    </a-scene>
</body>

</html>
