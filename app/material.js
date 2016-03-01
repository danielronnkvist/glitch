import { MeshBasicMaterial, ShaderMaterial, LinearFilter } from 'three';
const WebcamTexture = require('./webcamtexture.js');
const shader = require('./shader.js');

var webcamTexture = new WebcamTexture();
webcamTexture.texture.minFilter = LinearFilter;
shader.uniforms.texture.value = webcamTexture.texture;
var material = new ShaderMaterial(shader);

material.update = (delta, sound) => {
  webcamTexture.update(delta);

  if(delta) material.uniforms.time.value = delta % 3000;
  if(sound && sound.freq) material.uniforms.freq.value = sound.freq;
  if(sound && sound.amp) material.uniforms.amp.value = sound.amp;
}

module.exports = material;
