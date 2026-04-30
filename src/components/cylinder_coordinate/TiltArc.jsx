import { Line } from "@react-three/drei";

export default function TiltArc({ radius, phi, z }) {
  const segments = 64;
  const arcRadius = 0.75;
  const tilt = Math.atan2(z, radius);
  const radialDirection = [Math.cos(phi), 0, Math.sin(phi)];

  const points = Array.from({ length: segments + 1 }, (_, i) => {
    const angle = (i / segments) * tilt;
    const x = arcRadius * Math.cos(angle) * radialDirection[0];
    const y = arcRadius * Math.sin(angle);
    const zCoordinate = arcRadius * Math.cos(angle) * radialDirection[2];
    return [x, y, zCoordinate];
  });

  return <Line points={points} color="yellow" lineWidth={1} />;
}
