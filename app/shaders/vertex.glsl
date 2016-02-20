uniform float time;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 newPosition;
  float uCos = cos(time);
  float uSin = sin(time);

  newPosition.x = position.x * uCos - position.y * uSin;
  newPosition.y = position.x * uSin + position.y * uCos;
  newPosition.z = position.z + normal.z * sin(mod(time,2.0)) * 1.0;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
