
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  size?: number;
  color?: string;
  speed?: number;
}

const ParticleField = ({ 
  count = 500, 
  size = 0.1, 
  color = '#7928CA', 
  speed = 0.05 
}: ParticleFieldProps) => {
  const mesh = useRef<THREE.Points>(null);

  // Generate random particle positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += speed * 0.01;
      mesh.current.rotation.y += speed * 0.01;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={size}
        color={color}
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default ParticleField;
