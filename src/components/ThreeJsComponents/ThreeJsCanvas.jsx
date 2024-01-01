import { styled } from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import Experience from "./Experience.jsx";

export default function ThreeJsCanvas() {
  const SectionContainer = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
  `;

  return (
    <SectionContainer>
      <Leva collapsed />

      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 3],
        }}
      >
        <Experience />
      </Canvas>
    </SectionContainer>
  );
}
