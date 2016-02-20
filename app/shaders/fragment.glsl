uniform float time;
uniform float speed;
uniform float distortion;
uniform float distortion2;
uniform sampler2D texture;
varying vec2 vUv;

void main() {
  vec2 p = vUv;
  float ty = time*speed;
  float yt = p.y * ty;

  float offset = snoise(vec2(yt*3.0,0.0)) * 0.2;
  offset = pow( offset*distortion, 3.0 )/distortion;
  offset += snoise(vec2(yt*50.0, 0.0)) * distortion2 * 0.001;

  float red = sin(time * 10.0 / 4.0);
  float green = cos(time * 10.0 / 4.0);
  float blue = tan(time * 10.0 / 4.0);

  gl_FragColor = vec4(red, green, blue, 1.0) * texture2D(texture, vec2(fract(p.x + offset), fract(p.y - time*1.0)));;
}
