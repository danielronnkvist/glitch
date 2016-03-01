import { Vector2 } from 'three';

// shaders
var vertexShader = require('./shaders/vertex.glsl');
var fragmentShader = require('./shaders/fragment.glsl');
var noise = require('./shaders/noise.glsl');
var pnoise = require('./shaders/classicnoise3D.glsl');

var shader = {

  uniforms: {
    time: { type: "f", value: 0 },
    texture: { type: "t" },
    freq: { type: "f", value: 0 }
  },
  vertexShader: pnoise + vertexShader,
  fragmentShader: fragmentShader

};

module.exports = shader;
