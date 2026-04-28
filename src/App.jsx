import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import "./App.css";

import YProjection from './components/YProjection'
import XProjection from "./components/XProjection";
import PointerLine from './components/PointerLine'
import Axis from './components/Axis';
import SideMenu from './components/SideMenu';
import Sphere from "./components/Sphere";
import PointerSphere from "./components/PointerSphere";
import { useState } from "react";

function Scene({ isSphericalMode, radius, theta, phi }) {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Grid
        args={[40, 40]}
        cellSize={1}
        cellThickness={0.5}
        cellColor="white"
        sectionSize={5}
        sectionThickness={0.5}
        sectionColor="white"
        fadeDistance={50}
        fadeStrength={1}
        position={[0, 0, 0]}
        side={2}
      />

      <Axis mode={isSphericalMode} />
      <Sphere radius={radius} />
      <PointerSphere radius={radius} theta={theta} phi={phi}></PointerSphere>
      <PointerLine  phi={phi} theta={theta} radius={radius}></PointerLine>
      <XProjection  phi={phi} theta={theta} radius={radius}></XProjection>
      <YProjection  phi={phi} theta={theta} radius={radius}></YProjection>
      <OrbitControls />
    </>
  );
}

export default function App() {
  const [isSphericalMode, setIsSphericalMode] = useState(true);
  const [radius, setRadius] = useState(2);
  const [theta, setTheta] = useState(0);
  const [phi, setPhi] = useState(0);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      <SideMenu
        isSphericalMode={isSphericalMode}
        setIsSphericalMode={setIsSphericalMode}
        radius={radius}
        setRadius={setRadius}
        theta={theta}
        setTheta={setTheta}
        phi={phi}
        setPhi={setPhi}
      />

      <div style={{ flex: 1 }}>
        <Canvas style={{ background: "black" }} camera={{ position: [5, 5, 5] }}>
          <Scene 
          isSphericalMode={isSphericalMode} 
          radius={radius}
          theta={theta}
          phi={phi}
          />
        </Canvas>
      </div>
    </div>
  );
}