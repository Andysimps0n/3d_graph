export default function PointerSphere({ radius, theta,phi }) {


  const x_coordinate = radius * Math.cos(theta) * Math.cos(phi);
  const y_coordinate = radius * Math.sin(theta);
  const z_coordinate = radius * Math.sin(theta) * Math.sin(phi);


    console.log(y_coordinate)

  return (
    <mesh position={[x_coordinate, y_coordinate, z_coordinate]}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial 
        color="red"
        // transparent
        // opacity={1}
      />
    </mesh>
  );
}