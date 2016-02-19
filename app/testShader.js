import { Vector2 } from 'three';
var vertexShader = require('./shaders/vertex.glsl');
var fragmentShader = require('./shaders/fragment.glsl');

var TestShader = {

  uniforms: {
    time: { type: "f", value: 0 },
    resolution: { type: "v2", value: new Vector2 },
    texture: { type: "t" }
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader

};

module.exports = TestShader;
