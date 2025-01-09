import gsap from "gsap";
import * as THREE from "three";
import { GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
loader.load("./teacup_house/scene.gltf", function (gltf) {
  scene.add(gltf.scene);
  // document.addEventListener("scroll", () => {
  //   scrollY = window.scrollY;
  
  //   // Use GSAP to animate the rotation based on scrollY
  //   gsap.to(gltf.scene.rotation, {
  //       x: scrollY * 0.01,  // Control the speed of rotation on the X axis
  //       y: scrollY * 0.01,  // Control the speed of rotation on the Y axis
  //       duration: 0.5,       // Duration of the transition
  //       ease: "power2.out",  // Ease out for smoothness
  //   });
  // })
});

// const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 ); 
// const material = new THREE.MeshPhysicalMaterial(); 
// const cube = new THREE.Mesh( geometry, material ); scene.add( cube );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 10 );
scene.add( directionalLight );
// scene.add(cube);
const controls = new OrbitControls( camera, renderer.domElement );
camera.position.z = 4;
controls.update()
var scrollY = 0;


function animate() {
  // gltfssss.scene.rotation.x += 0.01;
  // gltfssss.scene.rotation.y += 0.01;

  renderer.render(scene, camera);
}
