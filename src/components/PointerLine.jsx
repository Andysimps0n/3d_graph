import { Line } from "@react-three/drei";

export default function PointerLine({ theta, radius, phi}) {


  const x_coordinate = radius * Math.sin(theta) * Math.cos(phi);
  const y_coordinate = radius * Math.cos(theta);
  const z_coordinate = radius * Math.sin(theta) * Math.sin(phi);



  return (
    <Line
    points={[[0, 0, 0], [x_coordinate, y_coordinate, z_coordinate]]}
    color="red"
    lineWidth={2}
    />
  );
}