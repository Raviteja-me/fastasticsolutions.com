varying vec2 vUv;
varying vec3 vPosition;
uniform float uTime;
uniform vec2 uMouse;

void main() {
  vUv = uv;
  vec3 pos = position;
  
  // Create multiple wave layers
  float wave1 = sin(pos.x * 3.0 + uTime) * 0.1;
  float wave2 = cos(pos.y * 4.0 + uTime * 0.8) * 0.1;
  float mouseWave = sin(length(uv - uMouse) * 8.0 - uTime * 2.0) * 0.15;
  
  pos.z += wave1 + wave2 + mouseWave;
  
  vPosition = pos;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}