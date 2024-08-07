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


let socket = new WebSocket("ws://192.168.137.42/ws");

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
    let g_alpha = deg_to_rad(parseFloat(jsonResponse["G_ALPHA_Y"]));
    let g_beta = deg_to_rad(parseFloat(jsonResponse["G_BETA_Y"]));
    let d_alpha = deg_to_rad(parseFloat(jsonResponse["D_ALPHA_Y"]));
    let d_beta = deg_to_rad(parseFloat(jsonResponse["D_BETA_Y"]));
    //IMPORTANT THING START HERE
    let ThighLAngle_Y = -deg_to_rad(parseFloat(jsonResponse["THIGH_L"]));
    let ThighRAngle_Y = -deg_to_rad(parseFloat(jsonResponse["THIGH_R"]));
    let TibiaLAngle_Y = -deg_to_rad(parseFloat(jsonResponse["TIBIA_L"]));
    let TibiaRAngle_Y = -deg_to_rad(parseFloat(jsonResponse["TIBIA_R"]));
    let back = -deg_to_rad(parseFloat(jsonResponse["BACK"]));

    // leftThigh
    character.leftThigh.rotation.x = ThighLAngle_Y + Math.PI;
    // character.leftThigh.rotation.y = deg_to_rad(parseFloat(jsonResponse["G_ALPHA_Z"]));
    // character.leftThigh.rotation.z = deg_to_rad(parseFloat(jsonResponse["G_ALPHA_X"]));

    // leftTibia
    character.leftTibia.rotation.x = TibiaLAngle_Y - ThighLAngle_Y;
    // character.leftTibia.rotation.y =  Math.abs(g_beta - g_alpha);
    // character.leftTibia.rotation.z =  Math.abs(g_beta - g_alpha);

    // rightThigh
    character.rightThigh.rotation.x = ThighRAngle_Y + Math.PI;
    // character.rightThigh.rotation.y = deg_to_rad(parseFloat(jsonResponse["D_ALPHA_Z"]));
    // character.rightThigh.rotation.z = deg_to_rad(parseFloat(jsonResponse["D_ALPHA_X"]));

    // rightTibia
    character.rightTibia.rotation.x = TibiaRAngle_Y - ThighRAngle_Y;
   
    // character.leftThigh.position.x = 15 // Écarter la jambe gauche (OFFSET_LEG_X)
    // character.rightThigh.position.x = -15; // Écarter la jambe droite (-OFFSET_LEG_X)
    // character.rightTibia.rotation.y = deg_to_rad(parseFloat(jsonResponse["D_BETA_Z"]));
    // character.rightTibia.rotation.z = deg_to_rad(parseFloat(jsonResponse["D_BETA_X"]));

    // spine
    // character.spine.rotation.x = -(spine - Math.PI/2)
    // character.spine.rotation.y = 0
    // character.spine.rotation.z = 0

    //////------------CE QUE J'AJOUTE--------------///////
    //----------------VARIABLE EN X---------------//
  
    let ThighLAngle_X = -deg_to_rad(parseFloat(jsonResponse["THIGH_LX"]));
    let ThighRAngle_X = -deg_to_rad(parseFloat(jsonResponse["THIGH_RX"]));
    let TibiaLAngle_X = -deg_to_rad(parseFloat(jsonResponse["TIBIA_LX"]));
    let TibiaRAngle_X = -deg_to_rad(parseFloat(jsonResponse["TIBIA_RX"]));

    // //----------------VARIABLE EN Z---------------//
    let ThighLAngle_Z = -deg_to_rad(parseFloat(jsonResponse["THIGH_LZ"]));
    let ThighRAngle_Z = -deg_to_rad(parseFloat(jsonResponse["THIGH_RZ"]));
    let TibiaLAngle_Z = -deg_to_rad(parseFloat(jsonResponse["TIBIA_LZ"]));
    let TibiaRAngle_Z = -deg_to_rad(parseFloat(jsonResponse["TIBIA_RZ"]));
    // //----------------ROTATION EN X---------------//
    
    character.leftThigh.rotation.y = ThighLAngle_X - 2;
    console.log("character.leftThigh.rotation.y: "+ character.leftThigh.rotation.y);
    // character.leftTibia.rotation.y = TibiaLAngle_X - ThighLAngle_X;
    console.log("--------------------------");
    console.log("--------------------------");
    character.rightThigh.rotation.y = ThighRAngle_X + 0.70;
    character.rightTibia.rotation.y = TibiaRAngle_X -(Math.PI/2) - 0.64;//NE FAIT PAS DE ROTATION PRÉSENTEMENT
    console.log("character.rightThigh.rotation.y: "+ character.rightThigh.rotation.y);
    console.log("character.rightTibia.rotation.y: "+ character.rightTibia.rotation.y);
    

    //console.log("La taille de variable est de: " + character.rightThigh.rotation.y);

    // //----------------ROTATION EN Z---------------//
    // character.leftThigh.rotation.z = -ThighLAngle_Z -1.57;
    // character.rightThigh.rotation.z = ThighRAngle_Z - Math.PI -1.57;

    // character.leftTibia.rotation.z = TibiaLAngle_Z + ThighLAngle_Z;
    // character.rightTibia.rotation.z = TibiaRAngle_Z + ThighRAngle_Z;

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
camera.position.set(0.7, 2.5, 2);//REMPLACER LA LIGNE DE CODE SUIVANTE PAR CELLE-CI (si vous voulez remettre la vue initiale):// camera.position.set(-2.5,3,-2.5);
camera.lookAt(new Vector3(0, 0, 0));

// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xd7f2fc, 1);

let mouseControls = new OrbitControls(camera,renderer.domElement );
let controls = new TransformControls(camera, renderer.domElement);

const seedScene = new SeedScene(controls);
scene.add(seedScene);


let character = seedScene.getObjectByName('character');
//console.log(character);
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