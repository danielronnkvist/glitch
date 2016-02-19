uniform float time;
uniform sampler2D texture;
varying vec2 vUv;

void main() {
  vec2 position = -1.0 + 2.0 * vUv;

  float red = abs(sin(position.x * position.y + time / 5.0));
  float green = abs(sin(position.x * position.y + time / 4.0));
  float blue = abs(sin(position.x * position.y + time / 3.0 ));

  gl_FragColor = vec4(red, green, blue, 2.0) * texture2D(texture, vUv);;
}
