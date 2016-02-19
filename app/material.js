import { MeshBasicMaterial } from 'three';
const WebcamTexture = require('./webcamtexture.js');

var webcamTexture = new WebcamTexture()
var material    = new MeshBasicMaterial({
    map : webcamTexture.texture
});

module.exports = {
  material,
  webcamTexture
}
