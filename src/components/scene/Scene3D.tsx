
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { useIsMobile } from '@/hooks/use-mobile';
import ParticleField from './ParticleField';
import FloatingShape from './FloatingShape';

const Scene3D = () => {
  const isMobile = useIsMobile();

  return (
    <div className="canvas-container">
      <Canvas dpr={[1, 2]}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          <ParticleField 
            count={isMobile ? 300 : 600} 
            size={isMobile ? 0.08 : 0.1} 
            color="#7928CA" 
          />
          
          <FloatingShape 
            position={[-2.5, 1, 0]} 
            scale={isMobile ? 0.6 : 1} 
            color="#7928CA"
            speed={0.8}
          />
          
          <FloatingShape 
            position={[2, -1, -1]} 
            scale={isMobile ? 0.4 : 0.8} 
            color="#4F46E5" 
            speed={1.2} 
            distort={0.6}
          />
          
          <FloatingShape 
            position={[0, 2, -3]} 
            scale={isMobile ? 0.3 : 0.6} 
            color="#00B5D8" 
            speed={1.5} 
            distort={0.3}
          />
          
          <Environment preset="night" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            rotateSpeed={0.2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
