import { ShaderMaterial, Vector2 } from 'three';

export const WaterShaderMaterial = new ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new Vector2(0, 0) },
    uResolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float uTime;
    uniform vec2 uMouse;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      float dist = length(uv - uMouse);
      float wave = sin(dist * 15.0 - uTime * 2.0) * exp(-dist * 2.0);
      pos.z += wave * 0.5;
      
      vPosition = pos;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vec2 uv = vUv;
      vec2 mouse = uMouse;
      
      // Create dynamic ripple effect
      float dist = length(uv - mouse);
      float ripple = sin(dist * 40.0 - uTime * 3.0) * 0.5 + 0.5;
      ripple *= exp(-dist * 2.0);
      
      // Create flowing water movement
      float flow = sin(uv.x * 20.0 + uTime) * 0.02 + 
                  cos(uv.y * 15.0 - uTime * 0.5) * 0.02;
      
      // Dark blue color palette
      vec3 deepBlue = vec3(0.0, 0.1, 0.2);
      vec3 brightBlue = vec3(0.0, 0.4, 0.6);
      vec3 highlight = vec3(0.3, 0.6, 0.8);
      
      // Mix colors based on height and ripples
      vec3 baseColor = mix(deepBlue, brightBlue, vPosition.z + 0.5);
      vec3 rippleColor = mix(baseColor, highlight, ripple * 0.6);
      
      // Add highlights
      float spec = pow(1.0 - dist, 4.0);
      vec3 finalColor = mix(rippleColor, highlight, spec * 0.3);
      
      gl_FragColor = vec4(finalColor, 0.9);
    }
  `,
});