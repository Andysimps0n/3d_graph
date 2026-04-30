import { Line } from "@react-three/drei";

export default function YProjection({ theta, radius, phi }) {
  const x = radius * Math.cos(theta) * Math.cos(phi);
  const y = radius * Math.sin(theta);
  const z = radius * Math.sin(theta) * Math.sin(phi);

  return (
    <Line
      points={[
        [x, 0, z],   // projection on XZ plane
        [0, 0, 0],   // actual point (pointer sphere)
      ]}
      color="white"
      lineWidth={0.5}
    />
  );
}