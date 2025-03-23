import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Plane } from '@react-three/drei';
import { Vector2, ShaderMaterial } from 'three';
import * as THREE from 'three';

const WaterShaderMaterial = new ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new Vector2(0, 0) },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;
    
    void main() {
      vec2 uv = vUv;
      vec2 mouse = uMouse;
      
      float dist = length(uv - mouse);
      float wave = sin(dist * 30.0 - uTime) * 0.1;
      
      vec3 color = vec3(0.1, 0.3, 0.5);
      color += wave;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `,
});

const WaterPlane = () => {
  const meshRef = useRef();
  const mousePos = useRef(new Vector2(0, 0));

  useFrame(({ clock, mouse }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
      mousePos.current.lerp(new Vector2(mouse.x * 0.5 + 0.5, mouse.y * 0.5 + 0.5), 0.1);
      meshRef.current.material.uniforms.uMouse.value = mousePos.current;
    }
  });

  return (
    <Plane ref={meshRef} args={[2, 2, 32, 32]} material={WaterShaderMaterial} />
  );
};

const WaterEffect = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 2]} />
        <WaterPlane />
      </Canvas>
    </div>
  );
};

export default WaterEffect;