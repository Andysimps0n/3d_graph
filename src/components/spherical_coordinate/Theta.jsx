import { Line } from "@react-three/drei";

export default function Theta({ theta, phi }) {
  const segments = 64;
  const arcRadius = 0.75;
  const phiDirection = [Math.cos(phi), 0, Math.sin(phi)];

  const points = Array.from({ length: segments + 1 }, (_, i) => {
    const angle = (i / segments) * theta;
    const x = arcRadius * Math.cos(angle) * phiDirection[0];
    const y = arcRadius * Math.sin(angle);
    const z = arcRadius * Math.cos(angle) * phiDirection[2];

    return [x, y, z];
  });

  return (
    <Line
      points={points}
      color="yellow"
      lineWidth={1}
    />
  );
}