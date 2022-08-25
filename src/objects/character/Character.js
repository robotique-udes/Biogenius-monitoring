import {Group, SkeletonHelper} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TransformControls} from "three/examples/jsm/controls/TransformControls";
// import MODEL from './male_number_3_-_rigged/scene.gltf';
import MODEL from './Soldier.glb';

export default class Character extends Group {
  constructor(controls) {
    const loader = new GLTFLoader();

    super();

    this.name = 'character';

    loader.load(MODEL, (gltf)=>{
      const model = gltf.scene;
      // let rightArm = model.getObjectByName( 'mixamorigRightArm' );
      this.rightArm = model.getObjectByName( 'mixamorigRightArm' );
      this.leftArm = model.getObjectByName('mixamorigLeftArm');
      this.hips = model.getObjectByName("mixamorigHips");
      this.spine = model.getObjectByName("mixamorigSpine");
      this.leftTibia = model.getObjectByName('mixamorigLeftLeg');
      this.rightTibia = model.getObjectByName('mixamorigRightLeg');
      this.leftThigh = model.getObjectByName('mixamorigLeftUpLeg');
      this.rightThigh = model.getObjectByName('mixamorigRightUpLeg');
      this.leftFoot = model.getObjectByName("mixamorigLeftFoot");
      this.rightFoot = model.getObjectByName("mixamorigRightFoot");
      this.leftToe = model.getObjectByName("mixamorigLeftToe_End");
      this.rightToe = model.getObjectByName("mixamorigRightToe_End");
      let helper = new SkeletonHelper(model)
      console.log(model)
      this.add( model );
      helper.visible = true;
      this.add(helper)

      // controls.attach( rightArm );
    });
  }
}
