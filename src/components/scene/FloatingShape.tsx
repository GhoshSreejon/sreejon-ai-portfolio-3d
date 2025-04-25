
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
  distort?: number;
}

const FloatingShape = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  color = '#4F46E5',
  speed = 1,
  distort = 0.4
}: FloatingShapeProps) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    
    mesh.current.position.y += Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.005;
    mesh.current.rotation.x += 0.01 * speed * 0.15;
    mesh.current.rotation.y += 0.01 * speed * 0.2;
  });

  return (
    <mesh ref={mesh} position={position} rotation={rotation} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <MeshDistortMaterial 
        color={color} 
        speed={speed * 2} 
        distort={distort} 
        roughness={0.4} 
        metalness={0.7}
      />
    </mesh>
  );
};

export default FloatingShape;
