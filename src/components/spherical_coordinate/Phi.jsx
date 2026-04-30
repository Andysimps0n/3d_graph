import { Line } from "@react-three/drei";

export default function Phi({ phi }) {
  const points = Array.from({ length: 64 }, (_, i) => {
    const angle = (i / 64) * (phi);

    return [
      Math.cos(angle) * 0.3,
      0,                     
      Math.sin(angle) * 0.3,
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