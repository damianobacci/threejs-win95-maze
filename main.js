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
fin.position.x = -2.5;
scene.add(fin);

//Walls
const wallLength = 10; // The length of each wall segment.
const wallHeight = 5; // The height of the walls.
const wallDepth = 0.05; // The depth/thickness of the walls.
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

const wall = new THREE.Mesh(wallGeo, wallMaterial);
const halfWallGeo = new THREE.BoxGeometry(5, 5, wallDepth);
const halfWall = new THREE.Mesh(halfWallGeo, wallMaterial);

//Vertical walls
//From top to bottom, from left to rigth
halfWall.position.set(0, 0, 2.5);
halfWall.rotation.y = Math.PI * 0.5;
scene.add(halfWall);

const halfWall2 = halfWall.clone();
halfWall2.position.set(5, 0, 7.5);
halfWall2.rotation.y = Math.PI * 0.5;
scene.add(halfWall2);

wall.position.set(10, 0, 5);
wall.rotation.y = Math.PI * 0.5;
scene.add(wall);

const wall3 = wall.clone();
wall3.position.set(20, 0, 5);
wall3.rotation.y = Math.PI * 0.5;
scene.add(wall3);

const halfWall3 = halfWall.clone();
halfWall3.position.set(30, 0, 2.5);
halfWall3.rotation.y = Math.PI * 0.5;
scene.add(halfWall3);

const halfWall4 = halfWall.clone();
halfWall4.position.set(15, 0, 7.5);
halfWall4.rotation.y = Math.PI * 0.5;
scene.add(halfWall4);

const halfWall5 = halfWall.clone();
halfWall5.position.set(25, 0, 7.5);
halfWall5.rotation.y = Math.PI * 0.5;
scene.add(halfWall5);

const wall4 = wall.clone();
wall4.position.set(15, 0, 15);
wall4.rotation.y = Math.PI * 0.5;
scene.add(wall4);

const wall5 = wall.clone();
wall5.position.set(25, 0, 15);
wall5.rotation.y = Math.PI * 0.5;
scene.add(wall5);

const halfWall6 = halfWall.clone();
halfWall6.position.set(20, 0, 12.5);
halfWall6.rotation.y = Math.PI * 0.5;
scene.add(halfWall6);

const halfWall7 = halfWall.clone();
halfWall7.position.set(30, 0, 12.5);
halfWall7.rotation.y = Math.PI * 0.5;
scene.add(halfWall7);

const halfWall8 = halfWall.clone();
halfWall8.position.set(0, 0, 17.5);
halfWall8.rotation.y = Math.PI * 0.5;
scene.add(halfWall8);

const wall6 = wall.clone();
wall6.position.set(5, 0, 20);
wall6.rotation.y = Math.PI * 0.5;
scene.add(wall6);

const halfWall9 = halfWall.clone();
halfWall9.position.set(10, 0, 17.5);
halfWall9.rotation.y = Math.PI * 0.5;
scene.add(halfWall9);

const halfWall10 = halfWall.clone();
halfWall10.position.set(20, 0, 22.5);
halfWall10.rotation.y = Math.PI * 0.5;
scene.add(halfWall10);

const halfWall11 = halfWall.clone();
halfWall11.position.set(25, 0, 22.5);
halfWall11.rotation.y = Math.PI * 0.5;
scene.add(halfWall11);

const halfWall12 = halfWall.clone();
halfWall12.position.set(0, 0, 27.5);
halfWall12.rotation.y = Math.PI * 0.5;
scene.add(halfWall12);

const wall7 = wall.clone();
wall7.position.set(10, 0, 30);
wall7.rotation.y = Math.PI * 0.5;
scene.add(wall7);

const wall8 = wall.clone();
wall8.position.set(20, 0, 35);
wall8.rotation.y = Math.PI * 0.5;
scene.add(wall8);

const halfWall13 = halfWall.clone();
halfWall13.position.set(25, 0, 32.5);
halfWall13.rotation.y = Math.PI * 0.5;
scene.add(halfWall13);

const halfWall14 = halfWall.clone();
halfWall14.position.set(30, 0, 27.5);
halfWall14.rotation.y = Math.PI * 0.5;
scene.add(halfWall14);

//Horizontal walls
//From top to bottom, from left to rigth
const wall2 = wall.clone();
wall2.position.set(0, 0, 10);
wall2.rotation.y = 0;
scene.add(wall2);

const halfWall15 = halfWall.clone();
halfWall15.position.set(12.5, 0, 10);
halfWall15.rotation.y = 0;
scene.add(halfWall15);

const halfWall16 = halfWall.clone();
halfWall16.position.set(27.5, 0, 15);
halfWall16.rotation.y = 0;
scene.add(halfWall16);

const halfWall17 = halfWall.clone();
halfWall17.position.set(2.5, 0, 20);
halfWall17.rotation.y = 0;
scene.add(halfWall17);

const halfWall18 = halfWall.clone();
halfWall18.position.set(12.5, 0, 20);
halfWall18.rotation.y = 0;
scene.add(halfWall18);

const halfWall19 = halfWall.clone();
halfWall19.position.set(22.5, 0, 20);
halfWall19.rotation.y = 0;
scene.add(halfWall19);

const halfWall20 = halfWall.clone();
halfWall20.position.set(32.5, 0, 20);
halfWall20.rotation.y = 0;
scene.add(halfWall20);

const halfWall21 = halfWall.clone();
halfWall21.position.set(17.5, 0, 25);
halfWall21.rotation.y = 0;
scene.add(halfWall21);

const halfWall22 = halfWall.clone();
halfWall22.position.set(22.5, 0, 30);
halfWall22.rotation.y = 0;
scene.add(halfWall22);

const halfWall23 = halfWall.clone();
halfWall23.position.set(27.5, 0, 35);
halfWall23.rotation.y = 0;
scene.add(halfWall23);

const wall9 = wall.clone();
wall9.position.set(10, 0, 25);
wall9.rotation.y = 0;
scene.add(wall9);

const wall10 = wall.clone();
wall10.position.set(0, 0, 30);
wall10.rotation.y = 0;
scene.add(wall10);

const wall11 = wall.clone();
wall11.position.set(15, 0, 30);
wall11.rotation.y = 0;
scene.add(wall11);

const wall12 = wall.clone();
wall12.position.set(5, 0, 35);
wall12.rotation.y = 0;
scene.add(wall12);
// //Rat

//Pic wall
const picWall = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 5),
  new THREE.MeshStandardMaterial({ map: picTexture })
);
picWall.position.set(15, 0, 30.1);
scene.add(picWall);

const picWall2 = picWall.clone();
picWall2.position.set(-4.9, 0, 15);
picWall2.rotation.y = Math.PI * 0.5;
scene.add(picWall2);

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
const ambientLight = new THREE.AmbientLight("#ffffff", 2.5);
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
camera.position.x = 15;
camera.position.y = 15;
camera.position.z = 62;
// camera.rotation.y = -Math.PI * 0.15;
camera.rotation.x = -Math.PI * 0.1;
scene.add(camera);
//Controls
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

  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

const audio = document.getElementById("audio");
const muted = () => {
  if (audio.muted) {
    audio.muted = false;
  } else {
    audio.muted = true;
  }
};
const mute = document.getElementById("mute");
mute.addEventListener("click", muted);
