import { IcosahedronGeometry, Mesh } from 'three';
const { renderer, scene, camera } = require('./setup.js');
const material = require('./material.js');
const audioManager = require('./audioManager.js');

var geometry = new IcosahedronGeometry( 20, 4 );
var mesh = new Mesh( geometry, material );

scene.add( mesh );
camera.position.z = 50;

function render(delta, now) {
  var freq = audioManager.analysis();
  material.update(delta, freq);
  requestAnimationFrame( render );
  renderer.render( scene, camera );
}
render();
