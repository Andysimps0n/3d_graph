import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import "./App.css";

import Cylinder from "./components/cylinder_coordinate/Cylinder.jsx";


import Theta from './components/spherical_coordinate/Theta'
import YProjection from './components/spherical_coordinate/YProjection'
import XProjection from "./components/spherical_coordinate/XProjection";
import PointerLine from './components/spherical_coordinate/PointerLine'
import Axis from './components/spherical_coordinate/Axis';
import SideMenu from './components/spherical_coordinate/SideMenu';
import Sphere from "./components/spherical_coordinate/Sphere";
import PointerSphere from "./components/spherical_coordinate/PointerSphere";
import { useState } from "react";
import { div } from "three/src/nodes/math/OperatorNode.js";

function Scene({ isSphericalMode, radius, theta, phi }) {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Grid
        args={[40, 40]}
        cellThickness={0.5}
        cellSize={1}
        cellColor="white"
        sectionSize={5}
        sectionThickness={0.5}
        sectionColor="white"
        fadeDistance={50}
        fadeStrength={1}
        position={[0, 0, 0]}
        side={2}
      />

      <OrbitControls />
      {isSphericalMode ? 
        <>
          <Axis/>
          <Sphere radius={radius} />
          <PointerSphere radius={radius} theta={theta} phi={phi}></PointerSphere>
          <PointerLine  phi={phi} theta={theta} radius={radius}></PointerLine>
          <XProjection  phi={phi} theta={theta} radius={radius}></XProjection>
          <YProjection  phi={phi} theta={theta} radius={radius}></YProjection>
        </>:
        <>
          <Axis/>
          <Cylinder radius={radius} ></Cylinder>
          <PointerLine  phi={phi} theta={theta} radius={radius}></PointerLine>


        
        </>
      }
    </>
  );
}

export default function App() {
  const [isSphericalMode, setIsSphericalMode] = useState(true);
  const [radius, setRadius] = useState(2);
  const [theta, setTheta] = useState(0);
  const [phi, setPhi] = useState(0);
  const [z, setZ] = useState(0)

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
        z={z}
        setZ={setZ}
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