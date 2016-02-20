import { Vector2 } from 'three';
var vertexShader = require('./shaders/vertex.glsl');
var fragmentShader = require('./shaders/fragment.glsl');

var shader = {

  uniforms: {
    time: { type: "f", value: 0 },
    resolution: { type: "v2", value: new Vector2 },
    texture: { type: "t" },
    speed: { type: "f", value: 10.2 },
    distortion: { type: "f", value: 3.0 },
    distortion2: { type: "f", value: 10.0 }
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader

};

module.exports = shader;
