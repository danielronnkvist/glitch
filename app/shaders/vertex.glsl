uniform float time;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 newPosition;

  newPosition = position + normal * sin(mod(time, 2.0)) * 1.0;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
