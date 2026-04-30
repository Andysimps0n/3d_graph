import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import "./App.css";

import Cylinder from "./components/cylinder_coordinate/Cylinder.jsx";
import CylindricalPointerLine from "./components/cylinder_coordinate/PointerLine.jsx";
import CylindricalPointerSphere from "./components/cylinder_coordinate/PointerSphere.jsx";
import CylindricalPhiArc from "./components/cylinder_coordinate/PhiArc.jsx";
import CylindricalTiltArc from "./components/cylinder_coordinate/TiltArc.jsx";


import SphericalPointerLine from './components/spherical_coordinate/PointerLine'
import Theta from "./components/spherical_coordinate/Theta";
import Phi from "./components/spherical_coordinate/Phi";
import Axis from './components/spherical_coordinate/Axis';
import SideMenu from './components/spherical_coordinate/SideMenu';
import Sphere from "./components/spherical_coordinate/Sphere";
import PointerSphere from "./components/spherical_coordinate/PointerSphere";
import { useState } from "react";

function Scene({ isSphericalMode, radius, theta, phi, z }) {
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
          <SphericalPointerLine  phi={phi} theta={theta} radius={radius}></SphericalPointerLine>
          <Phi phi={phi} />
          <Theta theta={theta} phi={phi} />
        </>:
        <>
          <Axis/>
          <Cylinder radius={radius} ></Cylinder>
          <CylindricalPointerSphere phi={phi} radius={radius} z={z}></CylindricalPointerSphere>
          <CylindricalPointerLine phi={phi} radius={radius} z={z}></CylindricalPointerLine>
          <CylindricalPhiArc phi={phi} />
          <CylindricalTiltArc phi={phi} radius={radius} z={z} />


        
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
          z={z}
          />
        </Canvas>
      </div>
    </div>
  );
}