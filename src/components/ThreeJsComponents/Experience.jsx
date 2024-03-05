import { useRef } from "react";
import * as THREE from "three";
import { useFrame, extend } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  OrbitControls,
  shaderMaterial,
  useGLTF,
} from "@react-three/drei";
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
  const reactIconRef = useRef();

  const { nodes } = useGLTF("/models/react-icon.glb");

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
    reactIconRef.current.rotation.x += delta * 0.10;
    reactIconRef.current.rotation.y += delta * 0.15;
  })

  return (
    <>
      <color args={["#030202"]} attach="background" />

      {/* <Perf position="top-left" /> */}

      {/* <OrbitControls makeDefault /> */}

      <directionalLight position={[1, 2, -2]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh
        ref={reactIconRef}
        geometry={nodes.reactIcon.geometry}
        scale={30}
        position={[0, 0, 1]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <MeshTransmissionMaterial
          color="lightsteelblue"
          transmissionSampler
          transmission={1.2}
          thickness={0.3}
          backsideThickness={0.2}
          chromaticAberration={0.1}
          distortion={0.5}
          resolution={512}
        />
      </mesh>

      <mesh scale={0.9}>
        <sphereGeometry args={[1, 16, 8]} />
        <MeshTransmissionMaterial
          color="lightsteelblue"
          transmissionSampler
          transmission={1.2}
          thickness={0.3}
          backsideThickness={0.2}
          chromaticAberration={0.1}
          distortion={0.5}
          resolution={512}
        />
      </mesh>

      <mesh ref={planeRef} position={[0, 0, -1.5]} scale={15}>
        <planeGeometry args={[2, 1]} />
        <planeMaterial ref={planeMaterialRef} />
      </mesh>
    </>
  );
}
