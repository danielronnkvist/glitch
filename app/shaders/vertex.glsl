uniform float time;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 newPosition = position + normal * vec3(sin(time * 0.2) * 3.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
