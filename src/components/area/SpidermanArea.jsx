import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CameraControl } from "../camera-setting/CameraControl";
import  Spiderman  from "../../models/spiderman/Spiderman";

const SpiderManArea  = ({isAnimationPlayed}) => {
  return (
    <Canvas className="canvas" style={{width: "100%", height: "100vh", background:"linear-gradient(135deg, #0d1b2a, #1b263b, #415a77, #778da9, #e63946)"}} camera={{ position: [0, 0, 5.5] }}>
      <CameraControl />
      <OrbitControls enableZoom={false} />
      <Environment preset="sunset" />
      <ambientLight intensity={0.8} color={"red"} />
      
      <Spiderman
         scale={window.innerWidth <= 768 ? [4, 4, 4] : [7, 7, 7]}
         position={window.innerWidth <= 768 ? [0, -5, -10] : [0, -7.95, -14]}
         rotation={[0, 0, 0]}
         isAnimationPlayed={isAnimationPlayed}
      />

    </Canvas>
  );
};

export default SpiderManArea;
