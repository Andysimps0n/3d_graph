// This one is for the cylindical coordinate

import { Line } from "@react-three/drei";
export default function PointerLine({ radius, phi, z }) {
  const x_coordinate = radius * Math.cos(phi);
  const y_coordinate = z;
  const z_coordinate = radius * Math.sin(phi);

  return (
    <Line
      points={[[0, 0, 0], [x_coordinate, y_coordinate, z_coordinate]]}
      color="red"
      lineWidth={2}
    />
  );
}