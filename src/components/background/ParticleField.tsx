import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const particleCount = 1000;
const positions = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 10;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

  colors[i * 3] = Math.random() * 0.3 + 0.7;     // More pink
  colors[i * 3 + 1] = Math.random() * 0.2;       // Less green for purple
  colors[i * 3 + 2] = Math.random() * 0.5 + 0.5; // More blue for purple
}

export function ParticleField() {
  const points = useRef<THREE.Points>(null!);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Create flowing motion
      points.current.geometry.attributes.position.array[i3] += Math.sin(time + i) * 0.002;
      points.current.geometry.attributes.position.array[i3 + 1] += Math.cos(time + i) * 0.002;
      
      // Reset particles that go too far
      if (Math.abs(points.current.geometry.attributes.position.array[i3]) > 5) {
        points.current.geometry.attributes.position.array[i3] *= -0.9;
      }
      if (Math.abs(points.current.geometry.attributes.position.array[i3 + 1]) > 5) {
        points.current.geometry.attributes.position.array[i3 + 1] *= -0.9;
      }
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}