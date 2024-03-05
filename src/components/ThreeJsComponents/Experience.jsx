import { useRef } from "react";
import * as THREE from "three";
import { useFrame, extend } from "@react-three/fiber";
import { MeshTransmissionMaterial, OrbitControls, shaderMaterial } from "@react-three/drei";
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

  const sphereRef = useRef();

  useFrame(
    (state, delta) =>
      (planeRef.current.rotation.y =
        Math.PI * Math.sin(state.clock.getElapsedTime() * 0.5) * 0.08)
  );
  useFrame(
    (state, delta) =>
      (planeMaterialRef.current.uTime = state.clock.getElapsedTime())
  );

  useFrame((state, delta) => {
    sphereRef.current.rotation.x += delta * 0.10;
    sphereRef.current.rotation.y += delta * 0.15;
  })

  return (
    <>
      <color args={["#030202"]} attach="background" />

      {/* <Perf position="top-left" /> */}

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh ref={sphereRef} position={[0, 0, 0]} scale={3}>
        <sphereGeometry args={[1, 4, 2]} />
        <MeshTransmissionMaterial
            color="lightsteelblue"
            transmissionSampler
            transmission={1.2}
            thickness={0.3}
            backsideThickness={0.2}
            chromaticAberration={0.1}
            distortion={0.4}
            resolution={1024}
          />
      </mesh>

      <mesh ref={planeRef} position={[0, 0, -1]} scale={10}>
        <planeGeometry args={[2, 1]} />
        <planeMaterial ref={planeMaterialRef} />
      </mesh>
    </>
  );
}
