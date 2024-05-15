import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame, extend } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  OrbitControls,
  shaderMaterial,
  useGLTF,
  Environment,
  Lightformer,
  useMatcapTexture,
  Center,
  Text3D,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls, button } from "leva";
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

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const material = new THREE.MeshMatcapMaterial();

export default function Experience() {
  /**
   * REFS
   */
  const planeRef = useRef();
  const planeMaterialRef = useRef();
  const reactIconRef = useRef();

  /**
   * REACT ICON MODEL
   */
  const { nodes } = useGLTF("/models/react-icon.glb");

  /**
   * TRANSMISSION MATERIAL CONFIG
   */
  // const { ...config } = useControls({
  //   backside: true,
  //   backsideThickness: { value: 0.3, min: 0, max: 2 },
  //   samples: { value: 16, min: 1, max: 32, step: 1 },
  //   resolution: { value: 1024, min: 64, max: 2048, step: 64 },
  //   transmission: { value: 1, min: 0, max: 1 },
  //   clearcoat: { value: 0, min: 0.1, max: 1 },
  //   clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
  //   thickness: { value: 0.3, min: 0, max: 5 },
  //   chromaticAberration: { value: 5, min: 0, max: 5 },
  //   anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.01 },
  //   distortion: { value: 0.5, min: 0, max: 4, step: 0.01 },
  //   distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
  //   temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
  //   ior: { value: 1.5, min: 0, max: 2, step: 0.01 },
  //   color: "#ff9cf5",
  //   gColor: "#ff7eb3",
  // });

  /**
   * PLANE ANIMATION
   */
  useFrame(
    (state, delta) =>
      (planeRef.current.rotation.y =
        Math.PI * Math.sin(state.clock.getElapsedTime() * 0.5) * 0.08)
  );
  useFrame(
    (state, delta) =>
      (planeMaterialRef.current.uTime = state.clock.getElapsedTime())
  );

  /**
   * REACT ICON ANIMATION
   */
  // useFrame((state, delta) => {
  //   reactIconRef.current.rotation.x += delta * 0.1;
  //   reactIconRef.current.rotation.y += delta * 0.15;
  // });

  const donutsRef = useRef([]);

  const [matcapTexture] = useMatcapTexture("1A2461_3D70DB_2C3C8F_2C6CAC", 256);

  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  useFrame((state, delta) => {
    for (const donut of donutsRef.current) {
      donut.rotation.y += delta * 0.1;
    }
  });

  return (
    <>
      <color args={["snow"]} attach="background" />

      {/* <Perf position="top-left" /> */}

      {/* <OrbitControls makeDefault /> */}

      <directionalLight position={[1, 2, -2]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Environment resolution={32}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
          <Lightformer type="ring" intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
        </group>
      </Environment>

      <mesh ref={planeRef} position={[0, 0, -1.5]} scale={15}>
        <planeGeometry args={[2, 1]} />
        <planeMaterial ref={planeMaterialRef} />
      </mesh>

      {[...Array(300)].map((value, index) => (
        <group
          key={index}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            (Math.random()) * 10,
          ]}
          scale={5 + Math.random() * 6}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        >
          <mesh 
            scale={0.03} 
            // material={material}
            geometry={torusGeometry}
            ref={(element) => (donutsRef.current[index] = element)}
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
        </group>
      ))}
    </>
  );
}
