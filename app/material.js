import { MeshBasicMaterial, ShaderMaterial, LinearFilter } from 'three';
const WebcamTexture = require('./webcamtexture.js');
const testShader = require('./testShader.js');

var webcamTexture = new WebcamTexture()
webcamTexture.texture.minFilter = LinearFilter
testShader.uniforms.texture.value = webcamTexture.texture;
var material = new ShaderMaterial(testShader);

material.update = (delta)=>{
  webcamTexture.update(delta);

  if(delta) material.uniforms.time.value = delta % 3000;
}

module.exports = material
