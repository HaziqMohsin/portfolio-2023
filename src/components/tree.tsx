"use client";

import { useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { useRef } from "react";
import { TetrahedronGeometry } from "three";
import * as THREE from "three";

const treePositions = [
  [-3, 0, -2],
  [-1, 0, +2],
  [0, 0, 0],
  [2, 0, -1],
  [4, 0, 1],
];

export default function TreeFiberPage() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        shadows
        camera={{ position: [-1, 5, 10], fov: 50 }}
        gl={{ antialias: true }}
      >
        {/* 1) Ambient light for soft overall illumination */}
        <ambientLight intensity={0.5} />

        {/* 2) Directional light to cast shadows */}
        <directionalLight
          castShadow
          intensity={0.8}
          position={[5, 10, 7]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
        />

        {/* 3) Ground plane to catch shadows */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#7BB369" />
        </mesh>

        {/* 4) The Tree group */}
        {treePositions.map((pos, idx) => (
          <PineTree key={idx} position={pos} />
        ))}

        <Tree position={[-3, 0, 4]} />

        <HouseStudio position={[2, 0, 3]} />

        {/* 5) Optional environment (sky) for nicer reflections/lighting */}
        <Environment preset="sunset" background={false} />

        {/* 6) OrbitControls so you can orbit/zoom the camera */}
        <OrbitControls enableDamping />

        {/* 7) Fallback overlay while the canvas loads */}
        {/* <Html center>
          <div style={{ color: "#666" }}>Loading …</div>
        </Html> */}
      </Canvas>
    </div>
  );
}

/**
 * Simple Tree component built from:
 * - a cylinder (brown trunk)
 * - a cone   (green foliage)
 *
 * You can pass `position` or wrap inside a <group> for multiple trees.
 */
function Tree({ position = [0, 0, 0] }) {
  // A ref so we can animate the tree if desired (e.g. gentle sway)
  const group = useRef(null);

  return (
    <group ref={group} position={position as any} castShadow receiveShadow>
      {/* Trunk */}
      {/* <mesh castShadow>
        <cylinderGeometry args={[0.2, 0.3, 1.5, 16]} />
        <meshStandardMaterial color="#8b5a2b" />
        Position the trunk so its base sits on the ground (Y = 0.75 / 2)
        <primitive />
      </mesh> */}
      {/* Trunk (lifted so base is at y=0) */}+{" "}
      <mesh castShadow position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 1.5, 16]} />
        <meshStandardMaterial color="#8b5a2b" />+{" "}
      </mesh>
      {/* Foliage */}
      {/* <mesh castShadow position={[0, 1.5 - 0.2, 0]}>
        <coneGeometry args={[1, 2, 32]} />
        <meshStandardMaterial color="#228b22" />
      </mesh> */}
      {/* Foliage (cone) */}+{" "}
      <mesh castShadow position={[0, 1.75, 0]}>
        <coneGeometry args={[1, 2, 32]} />
        <meshStandardMaterial color="#228b22" />+{" "}
      </mesh>
    </group>
  );
}

function PineTree({ position = [0, 0, 0] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    // Sway back and forth around Y

    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = (Math.sin(t) * 0.1) as any;
    }
  });
  return (
    <group ref={ref} position={position as any}>
      {/* Trunk */}
      <mesh castShadow position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 1.5, 16]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>

      {/* Bottom cone layer */}
      <mesh castShadow position={[0, 1.75, 0]}>
        <coneGeometry args={[1.2, 1.5, 32]} />
        <meshStandardMaterial color="#2e8b57" />
      </mesh>

      {/* Middle cone layer */}
      <mesh castShadow position={[0, 2.5, 0]}>
        <coneGeometry args={[1, 1.5, 32]} />
        <meshStandardMaterial color="#228b22" />
      </mesh>

      {/* Top cone layer */}
      <mesh castShadow position={[0, 3.2, 0]}>
        <coneGeometry args={[0.8, 1.2, 32]} />
        <meshStandardMaterial color="#006400" />
      </mesh>
    </group>
  );
}

function Home() {
  return (
    <group position={[2, 0.25, 3]} castShadow receiveShadow>
      <mesh castShadow position={[0, 0.71, 0]} rotateX={120}>
        <tetrahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="rgb(63, 19, 84, 1)" />
      </mesh>
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[1, 0.5, 1]} />
        <meshStandardMaterial color="rgb(214, 246, 0, 1)" />
      </mesh>
    </group>
  );
}

function HouseStudio({ position = [0, 0, 0] }) {
  const group = useRef(null);

  const [hover, setHover] = useState(false);

  // Dimensions
  const wallWidth = 2;
  const wallHeight = 0.4;
  const wallDepth = 1.3;

  // Door size
  const doorWidth = 0.1;
  const doorHeight = 0.2;
  const doorDepth = 0;

  // Button size
  const buttonWidth = 0.3;
  const buttonHeight = 0.15;
  const buttonDepth = 0.1;

  const roofHeight = wallWidth * 0.5; // 1.0
  const roofThickness = wallDepth; // match house depth

  // ─── Build roof geometry once via ExtrudeGeometry ───────────────────────────
  const roofGeometry = useMemo(() => {
    // 2D triangle “shape” in the X‐Y plane:
    //   • Left base  = (–wallWidth/2, 0)
    //   • Apex       = ( 0, roofHeight )
    //   • Right base = (+wallWidth/2, 0)
    const shape = new THREE.Shape();
    shape.moveTo(-wallWidth / 2, 0);
    shape.lineTo(0, roofHeight);
    shape.lineTo(wallWidth / 2, 0);
    shape.closePath();

    // Extrude along +Z by exactly wallDepth, no bevel
    const extrudeSettings = {
      depth: roofThickness,
      bevelEnabled: false,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, [wallWidth, roofHeight, roofThickness]);

  // Roof needs to be:
  //  • Lifted by wallHeight so its base sits on top of the walls (Y = wallHeight).
  //  • Centered in Z: since ExtrudeGeometry spans Z ∈ [0 → depth], we shift by -wallDepth/2.
  const roofOffset = [
    0, // X: center over walls
    wallHeight, // Y: lift so base of triangle is at Y = wallHeight
    -wallDepth / 2, // Z: recenter from [0 → wallDepth] to [–wallDepth/2 → +wallDepth/2]
  ];

  return (
    <group ref={group} position={position as any} castShadow receiveShadow>
      {/* — Walls (BoxGeometry) */}
      <mesh castShadow position={[0, wallHeight / 2, 0]}>
        <boxGeometry args={[wallWidth, wallHeight, wallDepth]} />
        <meshStandardMaterial color="rgb(214, 246, 0, 1)" />
      </mesh>
      {/* — Door (a smaller, thin box on the front face) */}
      <mesh castShadow position={[0, doorHeight / 2, wallDepth / 2 + 0.01]}>
        <boxGeometry args={[doorWidth, doorHeight, doorDepth]} />
        <meshStandardMaterial color="#555555" />
      </mesh>
      {/* — Button */}
      <mesh
        castShadow
        position={[0.5, 0.2, 0.651]}
        onPointerOver={(event) => setHover(true)}
      >
        <boxGeometry args={[buttonWidth, buttonHeight, buttonDepth]} />
        <meshStandardMaterial color={hover ? "orange" : "red"} />
      </mesh>
      {/* — Button */}
      <mesh castShadow position={[-0.5, 0.2, 0.651]}>
        <boxGeometry args={[buttonWidth, buttonHeight, buttonDepth]} />
        <meshStandardMaterial color="grey" />
      </mesh>
      {/* ─── Gable Roof (triangular prism) ─────────────────────────────────────── */}
      <mesh castShadow geometry={roofGeometry} position={roofOffset as any}>
        <meshStandardMaterial color="rgb(63, 19, 84, 1)" />
      </mesh>
    </group>
  );
}
