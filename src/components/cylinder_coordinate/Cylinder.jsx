export default function Cylinder({ radius }) {
  return (
    <mesh position={[0, 0, 0]}>
      {/* args: [radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded] */}
      <cylinderGeometry args={[radius, radius, 10, 32, 2, true]} />
      <meshStandardMaterial 
        color="grey"
        transparent
        opacity={0.2}
        side={2} // Ensures you can see the inside of the tube
      />
    </mesh>
  );
}