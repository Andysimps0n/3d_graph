import { Line } from "@react-three/drei";

export default function Phi({ phi }) {
  const segments = 64;
  const arcRadius = 0.75;
  const points = Array.from({ length: segments + 1 }, (_, i) => {
    const angle = (i / segments) * phi;

    return [
      Math.cos(angle) * arcRadius,
      0,
      Math.sin(angle) * arcRadius,
    ];
  });

  return (
    <Line
      points={points}
      color="yellow"
      lineWidth={1}
    />
  );
}