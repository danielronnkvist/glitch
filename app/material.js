import { MeshBasicMaterial, ShaderMaterial } from 'three';
const WebcamTexture = require('./webcamtexture.js');
const testShader = require('./testShader.js');

var webcamTexture = new WebcamTexture()
testShader.uniforms.texture.value = webcamTexture.texture;
var material = new ShaderMaterial(testShader);

module.exports = {
  material,
  webcamTexture,
  testShader
}
