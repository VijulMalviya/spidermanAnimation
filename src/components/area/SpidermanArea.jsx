import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CameraControl } from "../camera-setting/CameraControl";
import  Spiderman  from "../../models/spiderman/Spiderman";

const SpiderManArea  = ({isAnimationPlayed}) => {
  return (
    <Canvas className="canvas" style={{width: "100%", height: "100vh", backgroundColor: "darkRed"}} camera={{ position: [0, 0, 5.5] }}>
      <CameraControl />
      <OrbitControls enableZoom={false} />
      <Environment preset="sunset" />
      <ambientLight intensity={0.8} color={"red"} />
      
      <Spiderman
         scale={(7, 7, 7)}
         position={[0, -7.95, -14]}
         rotation={[0, 0, 0]}
         isAnimationPlayed={isAnimationPlayed}
      />

    </Canvas>
  );
};

export default SpiderManArea;
