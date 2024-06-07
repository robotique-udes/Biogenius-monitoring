/**
 * entry.js
 *
 * This is the first file loaded. It sets up the Renderer,
 * Scene and Camera. It also starts the render loop and
 * handles window resizes.
 *
 */

import {WebGLRenderer, PerspectiveCamera, Scene, Vector3, Clock, Quaternion} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SeedScene from './objects/Scene.js';
import {TransformControls} from "three/examples/jsm/controls/TransformControls";
import {abs, pow2, sqrt} from "three/examples/jsm/nodes/ShaderNode";

const scene = new Scene();
const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer({antialias: true});


let socket = new WebSocket("ws://192.168.137.11/ws");

socket.onopen = function(e) {
  console.log("[open] Connection established");
  socket.send("test")
};
let prev_time = 0;
socket.onmessage = function(event) {
  // alert(`[message] Data received from server: ${event.data}`);
  let jsonResponse = JSON.parse(event.data);
  // updateScene(jsonResponse);
  const t = clock.getElapsedTime();
  //console.log(1/((t - prev_time)));
  prev_time = t;
  // console.log(jsonResponse);
  if(character.leftThigh) {
    // let g_alpha = deg_to_rad(parseFloat(jsonResponse["G_ALPHA_Y"]));
    // let g_beta = deg_to_rad(parseFloat(jsonResponse["G_BETA_Y"]));
    // let d_alpha = deg_to_rad(parseFloat(jsonResponse["D_ALPHA_Y"]));
    // let d_beta = deg_to_rad(parseFloat(jsonResponse["D_BETA_Y"]));
    // let spine = deg_to_rad(parseFloat(jsonResponse["SPINE_Z"]));

    // leftThigh
    // character.leftThigh.rotation.x = g_alpha + Math.PI/2;
    // character.leftThigh.rotation.y = deg_to_rad(parseFloat(jsonResponse["G_ALPHA_Z"]));
    // character.leftThigh.rotation.z = deg_to_rad(parseFloat(jsonResponse["G_ALPHA_X"]));

    // leftTibia
    // character.leftTibia.rotation.x =  Math.abs(g_beta - g_alpha);
    // character.leftTibia.rotation.y =  Math.abs(g_beta - g_alpha);
    // character.leftTibia.rotation.z =  Math.abs(g_beta - g_alpha);

    // rightThigh
    // character.rightThigh.rotation.x = -d_alpha + Math.PI/2;
    // character.rightThigh.rotation.y = deg_to_rad(parseFloat(jsonResponse["D_ALPHA_Z"])) + Math.PI/2;
   // character.rightThigh.rotation.z = deg_to_rad(parseFloat(jsonResponse["D_ALPHA_X"]));

    //console.log("Thigh.x:"); console.log(character.rightThigh.rotation.x);
   // console.log("\nThigh.y:"); console.log(character.rightThigh.rotation.y);
   // console.log("\nThigh.z:");console.log(character.rightThigh.rotation.z);

    // rightTibia
    //character.rightTibia.rotation.x = (d_beta + d_alpha); //Ne pas mettre les autres axes de tibia
   //character.rightTibia.rotation.y = deg_to_rad(parseFloat(jsonResponse["D_BETA_Z"])) ;
    //character.rightTibia.rotation.z = deg_to_rad(parseFloat(jsonResponse["D_BETA_X"]));
    //console.log("\nTibia.x:"); console.log(character.rightTibia.rotation.x);
    // spine
    //  character.spine.rotation.x = -(spine)
    // character.spine.rotation.y = 0
    // character.spine.rotation.z = 0

    //console.log("Thigh.x:"); console.log(rad_to_deg(character.rightThigh.rotation.x));
    //console.log("\nThigh.y:"); console.log(rad_to_deg(character.rightThigh.rotation.y));
    //console.log("\nTibia.x:"); console.log(rad_to_deg(character.rightTibia.rotation.x));  

    character.leftTibia.rotation.x = deg_to_rad(parseFloat(jsonResponse["G_BETA_Y"]));
    character.leftThigh.rotation.x = Math.PI - deg_to_rad(parseFloat(jsonResponse["G_ALPHA_Y"]));
    character.rightTibia.rotation.x = deg_to_rad(parseFloat(jsonResponse["D_BETA_Y"]));
    character.rightThigh.rotation.x = Math.PI - deg_to_rad(parseFloat(jsonResponse["D_ALPHA_Y"]));

    console.log("\nspine.x:"); console.log(rad_to_deg(character.spine.rotation.x));

   // console.log(character.rightTibia.rotation.y);
  }
  socket.send("1");
};

socket.onclose = function(event) {
  if (event.wasClean) {
    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    console.log('[close] Connection died');
  }
};

socket.onerror = function(error) {
  console.log(`[error] ${error.message}`);
};


let clock = new Clock();

// scene

// camera
camera.position.set(-2.5,3,-2.5);
camera.lookAt(new Vector3(0,0,0));

// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xd7f2fc, 1);

let mouseControls = new OrbitControls(camera,renderer.domElement );
let controls = new TransformControls(camera, renderer.domElement);

const seedScene = new SeedScene(controls);
scene.add(seedScene);

let character = seedScene.getObjectByName('character');
console.log(character);
// render loop
const onAnimationFrameHandler = (timeStamp) => {
  const t = clock.getElapsedTime();
  // console.log(t);
  if (character.rightArm) {
    let w = Math.PI/2;
    let b = Math.PI/2;
    // // character.rightArm.rotation.z += Math.sin(4*t) * 0.07;
    // character.leftArm.rotation.x += Math.cos(Math.PI*t) * Math.PI/120;
    // character.rightArm.rotation.x += -Math.cos(Math.PI*t) * Math.PI/120;
    // // character.leftArm.rotation.z += Math.sin(4*t) * 0.02;
    // character.leftThigh.rotation.x = Math.sin(Math.PI*t) * Math.PI/4 - Math.PI*5/4;
    // character.rightThigh.rotation.x = Math.sin(Math.PI*t) * Math.PI/4 - Math.PI*5/4;
    // character.leftThigh.rotation.z = Math.sin(Math.PI*t) * Math.PI/8 - Math.PI/8;
    // character.rightThigh.rotation.z = -Math.sin(Math.PI*t) * Math.PI/8 + Math.PI/8;
    //
    // // character.leftThigh.rotation.y += -Math.sin(4*t - Math.PI/5) * 0.05;
    // character.leftTibia.rotation.x = -Math.sin(Math.PI*t) * Math.PI/4 + Math.PI/4;
    // character.rightTibia.rotation.x = -Math.sin(Math.PI*t) * Math.PI/4 + Math.PI/4;
    // // character.spine.rotation.z += Math.sin(4*t) * 0.04;
    // character.spine.rotation.x += -Math.cos(Math.PI*t ) *  Math.PI/200;

  // LEFT -------------------------------------------------------------
  //get world position of thigh
  let world_pos_cuisse = new Vector3(0,0,0);
  character.leftThigh.getWorldPosition(world_pos_cuisse);

  //get world position of tibia
  let world_pos_tibia = new Vector3(0,0,0);
  character.leftTibia.getWorldPosition(world_pos_tibia);

  //get world position of ankle
  let world_pos_foot = new Vector3(0,0,0);
  character.leftFoot.getWorldPosition(world_pos_foot);

  //get world position of toe
  let world_pos_toe = new Vector3(0,0,0);
  character.leftToe.getWorldPosition(world_pos_toe);

  // get distance between hips and knee
  let vector_cuisse = world_pos_cuisse.sub(world_pos_tibia);
  let length_cuisse = vector_cuisse.length();

  // get distance between knee and ankle
  let vector_tibia = world_pos_tibia.sub(world_pos_foot);
  let length_tibia = vector_tibia.length();

  // get angle between ankle and toe
  let vector_foot = world_pos_foot.sub(world_pos_toe);
  let length_foot = vector_foot.length();

  // height calculation
  let hauteur = length_cuisse * Math.cos(character.leftThigh.rotation.x + Math.PI) +
    length_tibia * Math.cos(character.leftThigh.rotation.x + Math.PI + character.leftTibia.rotation.x ) +
    length_foot * Math.cos(character.leftThigh.rotation.x + Math.PI + character.leftTibia.rotation.x + character.leftFoot.rotation.x + vector_tibia.angleTo(vector_foot));
  let hauteur_gauche = hauteur * 100 - 4;

  // RIGHT -------------------------------------------------------------
  //get world position of thigh
  character.rightThigh.getWorldPosition(world_pos_cuisse);

  //get world position of tibia
  character.rightTibia.getWorldPosition(world_pos_tibia);

  //get world position of ankle
  character.rightFoot.getWorldPosition(world_pos_foot);

  //get world position of toe
  character.rightToe.getWorldPosition(world_pos_toe);

  // get distance between hips and knee
  vector_cuisse = world_pos_cuisse.sub(world_pos_tibia);
  length_cuisse = vector_cuisse.length();

  // get distance between knee and ankle
  vector_tibia = world_pos_tibia.sub(world_pos_foot);
  length_tibia = vector_tibia.length();

  // get angle between ankle and toe
  vector_foot = world_pos_foot.sub(world_pos_toe);
  length_foot = vector_foot.length();

  // height calculation
  hauteur = length_cuisse * Math.cos(character.rightThigh.rotation.x + Math.PI) +
    length_tibia * Math.cos(character.rightThigh.rotation.x + Math.PI + character.rightTibia.rotation.x ) +
    length_foot * Math.cos(character.rightThigh.rotation.x + Math.PI + character.rightTibia.rotation.x + character.rightFoot.rotation.x + vector_tibia.angleTo(vector_foot));
  let hauteur_droite = hauteur * 100 - 4;
  // console.log(hauteur_droite, hauteur_gauche);
  if (hauteur_gauche > hauteur_droite) {
    character.hips.position.z = hauteur_gauche;
  } else {
    character.hips.position.z = hauteur_droite;
  }
  }
  renderer.render(scene, camera);
  seedScene.update && seedScene.update(timeStamp);

  window.requestAnimationFrame(onAnimationFrameHandler);
}
window.requestAnimationFrame(onAnimationFrameHandler);

// resize
const windowResizeHanlder = () => {
  const { innerHeight, innerWidth } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};
windowResizeHanlder();
window.addEventListener('resize', windowResizeHanlder);

// dom
document.body.style.margin = 0;
document.getElementById("scene").appendChild( renderer.domElement );

function deg_to_rad(degrees) {
  var pi = Math.PI;
  return degrees * (pi/180);
}

function rad_to_deg(rad) {
  var pi = Math.PI;
  return (rad*180)/pi
}

//
// function rand() {
//   return Math.random();
// }
//
// Plotly.newPlot('graph', [{
//   y: [1,2,3].map(rand),
//   mode: 'lines',
//   line: {color: '#80CAF6'}
// }, {
//   y: [1,2,3].map(rand),
//   mode: 'lines',
//   line: {color: '#DF56F1'}
// }]);
//
// var cnt = 0;
//
// var interval = setInterval(function() {
//
//   Plotly.extendTraces('graph', {
//     y: [[rand()], [rand()]]
//   }, [0, 1])
//
//   if(++cnt === 100) clearInterval(interval);
// }, 300);