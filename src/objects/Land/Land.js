import {GridHelper, Group, Mesh, PlaneGeometry, ShadowMaterial} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Land extends Group {
  constructor() {
    // const loader = new GLTFLoader();

    super();

    this.name = 'land';

    // loader.load(MODEL, (gltf)=>{
    //   this.add(gltf.scene);
    // });

    //plane_Base
    const planeGeometry = new PlaneGeometry( 25, 25 );
    planeGeometry.rotateX( - Math.PI / 2 );
    const planeMaterial = new ShadowMaterial( { opacity: 0.2 } );
    //plane-implementation
    const plane = new Mesh( planeGeometry, planeMaterial );
    plane.position.y = -0.01;
    plane.receiveShadow = true;
    this.add( plane );
    //plane-grid
    const helper = new GridHelper( 25, 100 );
    helper.position.y = 0;
    helper.material.opacity = 0.25;
    helper.material.transparent = true;
    this.add( helper );
  }
}
