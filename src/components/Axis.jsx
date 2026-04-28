import { Line } from "@react-three/drei";

export default function Axis() {
  return (
    <>
      <Line
        points={[[0, 0, 0], [5, 0, 0]]}
        color="green"
        lineWidth={0.8}
      />
      <Line
        points={[[0, 0, 0], [0, 5, 0]]}
        color="blue"
        lineWidth={0.8}
      />
      <Line
        points={[[0, 0, 0], [0, 0, 5]]}
        color="red"
        lineWidth={0.8}
      />
    </>



  );
}