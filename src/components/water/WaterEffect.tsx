import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { WaterPlane } from './WaterPlane';

const WaterEffect = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-[#0a0014]">
      <Canvas
        camera={{ position: [0, 2, 2], fov: 75 }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 2, 2]} />
        <ambientLight intensity={0.5} />
        <WaterPlane />
      </Canvas>
    </div>
  );
};

export default WaterEffect;