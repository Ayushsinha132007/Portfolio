import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DataNodes() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 1000;

  const [positions, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const p = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      p[i] = Math.random() * Math.PI * 2;
    }
    return [pos, p];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime * 0.1;
    
    meshRef.current.rotation.y = time * 0.5;
    meshRef.current.rotation.x = time * 0.2;

    const positionsArray = meshRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const iy = i * 3 + 1;
      // Gentle vertical drift
      positionsArray[iy] += Math.sin(time * 5 + phases[i]) * 0.005;
      
      // Wrap around
      if (positionsArray[iy] > 20) positionsArray[iy] = -20;
      if (positionsArray[iy] < -20) positionsArray[iy] = 20;
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      {/* 
        Using a standard material with neutral color. 
        It will look like dark/light sleek dots depending on the background.
      */}
      <pointsMaterial 
        size={0.06} 
        color="#8892b0"
        transparent 
        opacity={0.4} 
        sizeAttenuation 
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-background transition-colors duration-500">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <fog attach="fog" args={['#8892b0', 5, 25]} />
        <DataNodes />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background transition-colors duration-500 pointer-events-none" />
    </div>
  );
}
