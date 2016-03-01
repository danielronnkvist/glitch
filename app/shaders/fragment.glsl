uniform float time;
uniform float freq;
uniform sampler2D texture;
varying vec2 vUv;

void main() {

  float red = sin(freq / 10000.0);
  float green = cos(freq / 10000.0);
  float blue = tan(freq / 10000.0);

  gl_FragColor = vec4(red, green, blue, 1.0) * texture2D(texture, vUv);

}
