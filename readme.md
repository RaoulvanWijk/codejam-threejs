# CodeJam Three.js

This is a simple project to show how to use Three.js library to create 3D objects in a web page.

This project was created to be used in a CodeJam event.

The project uses Vite with Typescript and Vanilla html and css

## How to run

- Clone this repository
- run `npm install`
- run `npm run dev`

## Download 3d models
https://sketchfab.com/tags/threejs

## Three.js in action
https://www.bissell.com/en-us/product/crosswave-hydrosteam-plus-wet-dry-vac-exclusive-bundle-3518.html


## Exercices 
### 1. Three.js Basics
- Change the geometry of the cube 
  https://threejs.org/docs/#api/en/geometries/BoxGeometry

- Change the material of the chosen geometry to something else (make sure the material can be affected by lights) 
https://threejs.org/docs/?q=material#api/en/materials/MeshBasicMaterial
  
- Add lighting to the scene https://threejs.org/docs/?q=light#api/en/materials/MeshBasicMaterial
  
- Change the position of the camera https://threejs.org/docs/?q=perspecti#api/en/cameras/PerspectiveCamera


### 2. Make the object interactive
- Use the new mesh (like a sphere or cube) and allow the user to click or drag the mouse to move, scale, or rotate the object.

- Implement basic mouse interaction to move the camera or zoom in/out using mouse scroll.

### 3. Animate 
- Rotate the 3d object on scroll (with gsap)

### 4. Load in your own 3d model
- Download a 3d model from the Sketchfab site (link at the top) and add it to the scene

### 5. Use it in a website component
You are free to experiment with Three.js, you can look around online for cool websites and try to recreate them in someway.

Here are some cool examples we found:
- https://www.joshuas.world/
- https://labs.lusion.co/
- https://pad.dotincorp.com/ 

With this one: https://pad.dotincorp.com/ you can try to recreate it really simple. Start of with the 3d model and some hero text. Then scroll through the website and have the model rotate and move side to side while text animates in and out on the side.


