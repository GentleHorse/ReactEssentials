import { useRef } from "react";
import * as THREE from "three";
import { useFrame, extend } from "@react-three/fiber";
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import { Perf } from "r3f-perf";
import vertexShader from "./shaders/plane/vertex.glsl";
import fragmentShader from "./shaders/plane/fragment.glsl";

const PlaneMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#027a00"),
    uColorEnd: new THREE.Color("#1b9dee"),
  },
  vertexShader,
  fragmentShader
);

extend({ PlaneMaterial });

export default function Experience() {
  const planeRef = useRef();
  const planeMaterialRef = useRef();

  useFrame((state, delta) => planeRef.current.rotation.y = Math.PI * Math.sin(state.clock.getElapsedTime() * 0.5) * 0.08);
  useFrame((state, delta) => (planeMaterialRef.current.uTime = state.clock.getElapsedTime()));

  return (
    <>
      <color args={["#030202"]} attach="background" />

      {/* <Perf position="top-left" /> */}

      {/* <OrbitControls makeDefault /> */}

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh ref={planeRef} position={[0, 0, 0]} scale={10}>
        <planeGeometry args={[2, 1]} />
        <planeMaterial ref={planeMaterialRef} />
      </mesh>
    </>
  );
}
