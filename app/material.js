import { MeshBasicMaterial, ShaderMaterial, LinearFilter } from 'three';
const WebcamTexture = require('./webcamtexture.js');
const shader = require('./shader.js');

var webcamTexture = new WebcamTexture()
webcamTexture.texture.minFilter = LinearFilter
shader.uniforms.texture.value = webcamTexture.texture;
var material = new ShaderMaterial(shader);

material.update = (delta, freq)=>{
  webcamTexture.update(delta);

  if(delta) material.uniforms.time.value = delta % 3000;
  if(freq) material.uniforms.freq.value = freq;
}

module.exports = material
