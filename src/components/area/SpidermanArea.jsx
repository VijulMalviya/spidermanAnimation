import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SpiderMan } from "../../public/models/spiderman";
import { CameraControl } from "../camera-setting/CameraControl";

const SpiderManArea  = () => {
  return (
    <Canvas className="canvas" camera={{ position: [0, 0, 5.5] }}>
      <CameraControl />
      <OrbitControls enableZoom={false} />
      <Environment preset="sunset" />
      <ambientLight intensity={0.8} color={"pink"} />
      <boxGeometry />

    </Canvas>
  );
};

export default SpiderManArea;
