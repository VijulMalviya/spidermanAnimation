import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const SpiderManArea  = () => {
  return (
    <Canvas className="canvas" camera={{ position: [0, 0, 5.5] }}>
      <OrbitControls enableZoom={false} />
      <Environment preset="sunset" />
      <ambientLight intensity={0.8} color={"pink"} />
      <boxGeometry/>
    </Canvas>
  );
};

export default SpiderManArea;
