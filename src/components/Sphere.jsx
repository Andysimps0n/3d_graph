export default function Sphere({ radius }) {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial 
        color="grey"
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}