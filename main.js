import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

/**
 * Base
 */
// Debug
const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const floorTexture = textureLoader.load("/textures/floor.bmp");
const ceilingTexture = textureLoader.load("/textures/ceiling2.bmp");
const wallTexture = textureLoader.load("/textures/wall.bmp");
const picTexture = textureLoader.load("/textures/pic.bmp");
const finTexture = textureLoader.load("/textures/fin.png");
const ratTexture = textureLoader.load("/textures/rat.png");

/**
 * Maze
 */
//Fin
const fin = new THREE.Mesh(
  new THREE.CircleGeometry(1.5, 20),
  new THREE.MeshStandardMaterial({ map: finTexture })
);
fin.position.z = 2;
scene.add(fin);

//Walls
const wallLength = 10; // The length of each wall segment.
const wallHeight = 5; // The height of the walls.
const wallDepth = 0.03; // The depth/thickness of the walls.
const wallGeo = new THREE.BoxGeometry(wallLength, wallHeight, wallDepth);
const wallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture });

for (let wall = 0; wall < 4; wall++) {
  for (let i = 0; i < 4; i++) {
    const wallBox = new THREE.Mesh(wallGeo, wallMaterial);

    if (wall === 0) {
      wallBox.position.set(i * wallLength, 0, 0);
    } else if (wall === 1) {
      wallBox.rotation.y = Math.PI / 2;
      wallBox.position.set(-5, 0, i * wallLength + 5);
    } else if (wall === 2) {
      wallBox.rotation.y = Math.PI / 2;
      wallBox.position.set(35, 0, wallLength * i + 5);
    } else if (wall === 3) {
      wallBox.position.set(wallLength * i, 0, 40);
    }
    scene.add(wallBox);
  }
}

// // Walls
// const walls = new THREE.Group();
// scene.add(walls);

// //Wall tile numbered
// const wall = new THREE.Mesh(
//   new THREE.PlaneGeometry(10, 5),
//   new THREE.MeshStandardMaterial({ map: wallTexture })
// );
// wall.position.x = 5;
// wall.position.y = 2.5;
// wall.position.z = -10;
// scene.add(wall);

// const wall2 = wall.clone();
// wall2.position.set(-5, 2.5, -10);
// scene.add(wall2);

// const wall4 = wall.clone();
// wall4.rotation.y = Math.PI * 0.5;
// wall4.position.set(-10, 2.5, -5);
// scene.add(wall4);

// const wall5 = wall.clone();
// wall5.rotation.y = Math.PI * 0.5;
// wall5.position.set(-10, 2.5, 5);
// scene.add(wall5);

// const wall6 = wall.clone();
// wall6.rotation.y = -Math.PI * 0.5;
// wall6.position.set(10, 2.5, 5);
// scene.add(wall6);

// //Rat

// //Pic wall
// const picWall = new THREE.Mesh(
//   new THREE.PlaneGeometry(10, 5),
//   new THREE.MeshStandardMaterial({ map: picTexture })
// );
// picWall.rotation.y = -Math.PI * 0.5;
// picWall.position.x = 10;
// picWall.position.y = 2.5;
// picWall.position.z = -5;
// scene.add(picWall);

// Floor
const floorGeometry = new THREE.PlaneGeometry(10, 5);
const floorMaterial = new THREE.MeshStandardMaterial({ map: floorTexture });

for (let i = 0; i < 4; i++) {
  for (let k = 0; k < 8; k++) {
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);

    floor.rotation.x = -Math.PI * 0.5;
    floor.position.set(i * 10, -2.5, k * 5 + 2.5);
    scene.add(floor);
  }
}

// //Ceiling
const ceilingGeometry = new THREE.PlaneGeometry(10, 5);
const ceilingMaterial = new THREE.MeshStandardMaterial({ map: ceilingTexture });

for (let i = 0; i < 4; i++) {
  for (let k = 0; k < 8; k++) {
    const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);

    ceiling.rotation.x = Math.PI * 0.5;
    ceiling.position.set(i * 10, 2.5, k * 5 + 2.5);
    scene.add(ceiling);
  }
}

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight("#ffffff", 1.8);
gui.add(ambientLight, "intensity").min(2).max(3).step(0.001);
scene.add(ambientLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  150
);
camera.position.x = 40;
camera.position.y = 10;
camera.position.z = 40;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
