import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import { Vector2 } from 'three';
import { WaterMaterial } from './WaterMaterial';

export const WaterPlane = () => {
  const meshRef = useRef<THREE.Mesh>();
  const materialRef = useRef<WaterMaterial>();
  const mousePos = useRef(new Vector2(0.5, 0.5));
  const { size, viewport } = useThree();

  useEffect(() => {
    materialRef.current = new WaterMaterial();
    
    const handleResize = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame(({ clock, mouse }) => {
    if (materialRef.current && meshRef.current) {
      // Convert mouse coordinates to UV space
      mousePos.current.set(
        (mouse.x + 1) * 0.5,
        (-mouse.y + 1) * 0.5
      );
      materialRef.current.update(clock.getElapsedTime(), mousePos.current);
    }
  });

  return (
    <Plane
      ref={meshRef}
      args={[4, 4, 128, 128]}
      rotation={[-Math.PI * 0.5, 0, 0]}
      position={[0, -1, 0]}
      material={materialRef.current}
    />
  );
};