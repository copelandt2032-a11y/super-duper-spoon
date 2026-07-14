import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function RotatingShape() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial color="#8352FD" metalness={0.6} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0][0][5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3][3][3]} intensity={1.2} />
        <Stars radius={50} depth={50} count={3000} factor={4} fade />
        <RotatingShape />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
