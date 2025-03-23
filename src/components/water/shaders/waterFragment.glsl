uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vec2 uv = vUv;
  vec2 mouse = uMouse;
  
  // Enhanced ripple effect
  float dist = length(uv - mouse);
  float ripple = sin(dist * 40.0 - uTime * 3.0) * 0.5 + 0.5;
  ripple *= exp(-dist * 3.0);
  
  // Multiple flowing layers
  float flow1 = sin(uv.x * 20.0 + uTime) * 0.05;
  float flow2 = cos(uv.y * 15.0 - uTime * 0.8) * 0.04;
  
  // Dark purple and blue color palette
  vec3 deepPurple = vec3(0.1, 0.0, 0.2);
  vec3 darkBlue = vec3(0.0, 0.05, 0.3);
  vec3 brightPurple = vec3(0.3, 0.1, 0.4);
  
  // Dynamic color mixing with more contrast
  float heightFactor = vPosition.z * 2.0 + 0.5;
  vec3 baseColor = mix(deepPurple, darkBlue, heightFactor);
  baseColor = mix(baseColor, brightPurple, ripple * 0.8);
  
  // Enhanced shimmer effect
  float shimmer = sin(uv.x * 30.0 + uv.y * 20.0 + uTime * 2.0) * 0.08;
  baseColor += shimmer * vec3(0.2, 0.1, 0.3);
  
  // Brighter highlights for visibility
  float highlight = pow(1.0 - dist, 4.0) * 0.4;
  baseColor += highlight * brightPurple;
  
  gl_FragColor = vec4(baseColor, 0.98);
}