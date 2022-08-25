import { Group } from 'three';
import Land from './Land/Land.js';
import Character from './character/Character.js';
import BasicLights from './Lights.js';

export default class SeedScene extends Group {
  constructor(controls) {
    super();

    const land = new Land();
    const character = new Character(controls);
    const lights = new BasicLights();
    this.add(land, character, lights);
  }

}
