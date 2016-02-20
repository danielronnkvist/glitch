import { PlaneGeometry, Mesh, MeshBasicMaterial } from 'three';
const { renderer, scene, camera } = require('./setup.js');
const material = require('./material.js');

var geometry = new PlaneGeometry( 1, 1, 1 );
var mesh = new Mesh( geometry, material );

scene.add( mesh );
camera.position.z = 1;

function render(delta, now) {
  material.update(delta);
  requestAnimationFrame( render );
  renderer.render( scene, camera );
}
render();
