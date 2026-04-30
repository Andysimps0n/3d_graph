export default function PointerSphere({ radius, phi, z }) {
  const x_coordinate = radius * Math.cos(phi);
  const y_coordinate = z;
  const z_coordinate = radius * Math.sin(phi);

  return (
    <mesh position={[x_coordinate, y_coordinate, z_coordinate]}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}