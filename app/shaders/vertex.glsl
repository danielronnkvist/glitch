uniform float time;
uniform float freq;
varying vec2 vUv;

float turbulence( vec3 p ) {
  float w = 100.0;
  float t = -.5;
  for (float f = 1.0 ; f <= 10.0 ; f++ ){
    float power = pow( 2.0, f );
    t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );
  }
  return t;
}

void main() {
  vUv = uv;

  // get a turbulent 3d noise using the normal, normal to high freq
  float noise = 10.0 *  -0.10 * turbulence( 0.5 * normal );
  // get a 3d noise using the position, low frequency
  float b = 5.0 * pnoise( 0.05 * position, vec3( freq ) );
  // compose both noises
  float displacement = - 10.0 * noise + b;


  vec3 newPosition = position + normal * displacement;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
