import { ShaderMaterial, Vector2 } from 'three';

export class WaterMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new Vector2(0.5, 0.5) },
        uResolution: { value: new Vector2(window.innerWidth, window.innerHeight) }
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
          float wave = sin(dist * 10.0 - uTime * 2.0) * exp(-dist * 3.0);
          
          // Add multiple wave layers
          float wave1 = sin(pos.x * 3.0 + uTime) * 0.1;
          float wave2 = cos(pos.y * 4.0 + uTime * 0.8) * 0.1;
          
          pos.z += wave * 0.3 + wave1 + wave2;
          
          vPosition = pos;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;
        varying vec3 vPosition;

        void main() {
          vec2 uv = vUv;
          float dist = length(uv - uMouse);
          
          // Create dynamic ripple effect
          float ripple = sin(dist * 40.0 - uTime * 3.0) * 0.5 + 0.5;
          ripple *= exp(-dist * 3.0);
          
          // Dark purple color palette
          vec3 deepPurple = vec3(0.1, 0.0, 0.2);
          vec3 brightPurple = vec3(0.3, 0.1, 0.4);
          
          // Mix colors based on height and ripples
          vec3 color = mix(deepPurple, brightPurple, ripple);
          
          // Add shimmer effect
          float shimmer = sin(uv.x * 30.0 + uv.y * 20.0 + uTime * 2.0) * 0.1;
          color += shimmer * vec3(0.2, 0.1, 0.3);
          
          gl_FragColor = vec4(color, 0.9);
        }
      `,
      transparent: true,
    });
  }

  update(time: number, mouse: Vector2) {
    this.uniforms.uTime.value = time;
    this.uniforms.uMouse.value.lerp(mouse, 0.1);
  }
}