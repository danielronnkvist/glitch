import { IcosahedronGeometry, Mesh } from 'three';
const { renderer, scene, camera, cameraControl } = require('./setup.js');
const material = require('./material.js');

var geometry = new IcosahedronGeometry( 20, 4 );
var mesh = new Mesh( geometry, material );

scene.add( mesh );
camera.position.z = 50;

function render(delta, now) {
  //geometry.rotateY(0.01);
  material.update(delta);
  cameraControl.update();
  requestAnimationFrame( render );
  renderer.render( scene, camera );
}
render();
