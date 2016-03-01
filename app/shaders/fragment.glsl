uniform float time;
uniform float freq;
uniform float amp;
uniform sampler2D texture;
varying vec2 vUv;

void main() {

  float red = 0.5 + snoise(0.01 * vec2(freq / 20.0, amp));
  float green = 0.5 + snoise(0.01 * vec2(amp, freq / 20.0));
  float blue = 0.5 + snoise(0.01 * vec2(freq / 100.0, amp));

  gl_FragColor = vec4(red, green, blue, 1.0) * texture2D(texture, vUv);

}
