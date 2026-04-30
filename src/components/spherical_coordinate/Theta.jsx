import { Line } from "@react-three/drei";

export default function Theta({ theta, phi }) {
  const points = Array.from({ length: 64 }, (_, i) => {
    const angle = (i / 64) * (theta);

    return [
      Math.cos(angle) * 0.3,
      Math.sin(angle) * 0.3,
      0,                     
    ];
  });

  return (
    <Line
      points={points}
      color="yellow"
      rotation = {[0,-phi, 0]}
      lineWidth={1}
    />
  );
}