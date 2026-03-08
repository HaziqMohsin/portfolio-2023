"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";

function Desk() {
    const legPositions: [number, number, number][] = [
        [-1.9, -0.87, -1.05],
        [1.9, -0.87, -1.05],
        [-1.9, -0.87, 1.05],
        [1.9, -0.87, 1.05],
    ];

    return (
        <group>
            {/* Table top — surface is at y=0, box center at y=-0.06 */}
            <mesh position={[0, -0.06, 0]} receiveShadow castShadow>
                <boxGeometry args={[4.2, 0.12, 2.4]} />
                <meshStandardMaterial
                    color="#8B6347"
                    roughness={0.65}
                    metalness={0.0}
                />
            </mesh>

            {/* Edge trim */}
            <mesh position={[0, -0.06, 1.21]} castShadow>
                <boxGeometry args={[4.2, 0.12, 0.02]} />
                <meshStandardMaterial color="#6b4c30" roughness={0.5} />
            </mesh>

            {/* Legs */}
            {legPositions.map((pos, i) => (
                <mesh key={i} position={pos} castShadow>
                    <boxGeometry args={[0.1, 1.5, 0.1]} />
                    <meshStandardMaterial color="#6B4423" roughness={0.8} />
                </mesh>
            ))}

            {/* Cross support beam */}
            <mesh position={[0, -1.32, 0]} castShadow>
                <boxGeometry args={[3.7, 0.06, 0.06]} />
                <meshStandardMaterial color="#6B4423" roughness={0.8} />
            </mesh>
        </group>
    );
}

function MonitorRaiser() {
    // Sits on table surface (y=0), height=0.14 → center at y=0.07, top at y=0.14
    return (
        <group position={[0, 0.07, -0.72]}>
            <mesh castShadow receiveShadow>
                <boxGeometry args={[1.75, 0.14, 0.46]} />
                <meshStandardMaterial
                    color="#1e1e1e"
                    roughness={0.4}
                    metalness={0.5}
                />
            </mesh>
            {/* Legs on the raiser */}
            {(
                [
                    [-0.75, -0.1, 0.18],
                    [0.75, -0.1, 0.18],
                    [-0.75, -0.1, -0.18],
                    [0.75, -0.1, -0.18],
                ] as [number, number, number][]
            ).map((p, i) => (
                <mesh key={i} position={p} castShadow>
                    <boxGeometry args={[0.06, 0.06, 0.06]} />
                    <meshStandardMaterial
                        color="#111"
                        roughness={0.3}
                        metalness={0.6}
                    />
                </mesh>
            ))}
        </group>
    );
}

function UltraWideMonitor() {
    // Origin = top of raiser (y=0.14), z shifted back
    return (
        <group position={[0, 0.14, -0.82]}>
            {/* Stand base */}
            <mesh position={[0, 0.025, 0.1]} castShadow>
                <boxGeometry args={[0.52, 0.05, 0.28]} />
                <meshStandardMaterial
                    color="#141414"
                    roughness={0.25}
                    metalness={0.8}
                />
            </mesh>

            {/* Stand neck */}
            <mesh position={[0, 0.22, 0.06]} castShadow>
                <boxGeometry args={[0.07, 0.34, 0.07]} />
                <meshStandardMaterial
                    color="#141414"
                    roughness={0.25}
                    metalness={0.8}
                />
            </mesh>

            {/* Neck-to-screen connector (VESA arm) */}
            <mesh position={[0, 0.39, 0.02]} castShadow>
                <boxGeometry args={[0.18, 0.05, 0.12]} />
                <meshStandardMaterial
                    color="#141414"
                    roughness={0.25}
                    metalness={0.8}
                />
            </mesh>

            {/* Monitor bezel */}
            <mesh position={[0, 0.88, -0.02]} castShadow>
                <boxGeometry args={[2.35, 0.96, 0.07]} />
                <meshStandardMaterial
                    color="#0d0d0d"
                    roughness={0.2}
                    metalness={0.7}
                />
            </mesh>

            {/* Screen face */}
            <mesh position={[0, 0.88, 0.02]}>
                <boxGeometry args={[2.22, 0.86, 0.005]} />
                <meshStandardMaterial
                    color="#040d1c"
                    roughness={0.0}
                    emissive="#1e5090"
                    emissiveIntensity={0.45}
                />
            </mesh>

            {/* Subtle taskbar band at bottom of screen */}
            <mesh position={[0, 0.455, 0.025]}>
                <boxGeometry args={[2.22, 0.025, 0.002]} />
                <meshStandardMaterial
                    color="#3a70c0"
                    emissive="#3a70c0"
                    emissiveIntensity={0.6}
                />
            </mesh>

            {/* Status LED */}
            <mesh position={[0, 0.415, 0.025]}>
                <boxGeometry args={[0.04, 0.008, 0.002]} />
                <meshStandardMaterial
                    color="#00ccff"
                    emissive="#00ccff"
                    emissiveIntensity={2.0}
                />
            </mesh>
        </group>
    );
}

function Laptop() {
    // Laptop sits on table (y=0), centered in front of the monitor
    // Base: 1.25w × 0.05h × 0.84d, center at y=0.025
    // Hinge at back edge: z = 0.15 - 0.42 = -0.27, y = 0.05
    // Screen open ~115°: rotation.x ≈ +0.38 rad from vertical
    //   → screen center offset from hinge:
    //     dy = (0.82/2) * cos(0.38) ≈ 0.41 * 0.928 = 0.38
    //     dz = -(0.82/2) * sin(0.38) ≈ -0.41 * 0.371 = -0.152
    const hingeZ = 0.15 - 0.42; // -0.27
    const hingeY = 0.05;
    const angle = 0.38;
    const halfH = 0.41;
    const screenY = hingeY + halfH * Math.cos(angle);
    const screenZ = hingeZ - halfH * Math.sin(angle);

    return (
        <group position={[0, 0, 0.15]}>
            {/* Keyboard deck */}
            <mesh position={[0, 0.025, 0]} castShadow receiveShadow>
                <boxGeometry args={[1.25, 0.05, 0.84]} />
                <meshStandardMaterial
                    color="#787878"
                    roughness={0.3}
                    metalness={0.75}
                />
            </mesh>

            {/* Keyboard area (slightly recessed color) */}
            <mesh position={[0, 0.051, -0.04]}>
                <boxGeometry args={[1.1, 0.002, 0.56]} />
                <meshStandardMaterial
                    color="#606060"
                    roughness={0.4}
                    metalness={0.6}
                />
            </mesh>

            {/* Trackpad */}
            <mesh position={[0, 0.051, 0.28]}>
                <boxGeometry args={[0.34, 0.002, 0.22]} />
                <meshStandardMaterial
                    color="#646464"
                    roughness={0.15}
                    metalness={0.8}
                />
            </mesh>

            {/* Screen lid */}
            <mesh
                position={[0, screenY, screenZ]}
                rotation={[angle, 0, 0]}
                castShadow
            >
                <boxGeometry args={[1.25, 0.82, 0.03]} />
                <meshStandardMaterial
                    color="#787878"
                    roughness={0.3}
                    metalness={0.75}
                />
            </mesh>

            {/* Screen display */}
            <mesh
                position={[0, screenY, screenZ + 0.016]}
                rotation={[angle, 0, 0]}
            >
                <boxGeometry args={[1.18, 0.76, 0.002]} />
                <meshStandardMaterial
                    color="#030810"
                    roughness={0.0}
                    emissive="#1a3860"
                    emissiveIntensity={0.3}
                />
            </mesh>

            {/* Apple-style logo on lid back */}
            <mesh
                position={[0, screenY, screenZ - 0.016]}
                rotation={[angle, 0, 0]}
            >
                <boxGeometry args={[0.18, 0.18, 0.001]} />
                <meshStandardMaterial
                    color="#999999"
                    roughness={0.1}
                    metalness={0.9}
                    emissive="#888888"
                    emissiveIntensity={0.1}
                />
            </mesh>
        </group>
    );
}

function PS5Console() {
    // Stands vertically on right side of desk
    // Body height ~0.64, stand adds 0.04 → total ~0.68
    // Stand base center at y=0.02, console body center at y=0.04+0.32=0.36
    return (
        <group position={[1.52, 0, 0.08]} rotation={[0, -0.25, 0]}>
            {/* Stand */}
            <mesh position={[0, 0.02, 0]} castShadow>
                <boxGeometry args={[0.3, 0.04, 0.13]} />
                <meshStandardMaterial
                    color="#d2d2d2"
                    roughness={0.25}
                    metalness={0.15}
                />
            </mesh>

            {/* Dark center core */}
            <mesh position={[0, 0.36, 0]} castShadow>
                <boxGeometry args={[0.2, 0.64, 0.41]} />
                <meshStandardMaterial
                    color="#0e1928"
                    roughness={0.35}
                    metalness={0.25}
                />
            </mesh>

            {/* White front panel — offset slightly forward/up to simulate the curve */}
            <mesh position={[0.025, 0.40, 0]} castShadow>
                <boxGeometry args={[0.15, 0.62, 0.43]} />
                <meshStandardMaterial
                    color="#ebebeb"
                    roughness={0.12}
                    metalness={0.0}
                />
            </mesh>

            {/* White back panel — offset slightly backward/down */}
            <mesh position={[-0.025, 0.32, 0]} castShadow>
                <boxGeometry args={[0.15, 0.62, 0.43]} />
                <meshStandardMaterial
                    color="#ebebeb"
                    roughness={0.12}
                    metalness={0.0}
                />
            </mesh>

            {/* Disc drive slot */}
            <mesh position={[0.115, 0.22, 0.06]}>
                <boxGeometry args={[0.005, 0.018, 0.22]} />
                <meshStandardMaterial color="#050505" />
            </mesh>

            {/* Power button — blue LED */}
            <mesh position={[0.115, 0.48, 0.17]}>
                <boxGeometry args={[0.005, 0.014, 0.014]} />
                <meshStandardMaterial
                    color="#70c8ff"
                    emissive="#70c8ff"
                    emissiveIntensity={2.5}
                />
            </mesh>

            {/* USB-A */}
            <mesh position={[0.115, 0.54, 0.145]}>
                <boxGeometry args={[0.005, 0.022, 0.042]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>

            {/* USB-C */}
            <mesh position={[0.115, 0.54, 0.076]}>
                <boxGeometry args={[0.005, 0.013, 0.026]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>

            {/* Eject button */}
            <mesh position={[0.115, 0.29, 0.17]}>
                <boxGeometry args={[0.005, 0.01, 0.01]} />
                <meshStandardMaterial color="#222" />
            </mesh>

            {/* PS logo area on front */}
            <mesh position={[0.04, 0.38, 0.22]}>
                <boxGeometry args={[0.02, 0.02, 0.002]} />
                <meshStandardMaterial
                    color="#888888"
                    roughness={0.1}
                    metalness={0.8}
                />
            </mesh>
        </group>
    );
}

export default function StudyTable() {
    return (
        <div className="w-full h-[600px] rounded-xl overflow-hidden">
            <Canvas
                camera={{ position: [3.8, 2.6, 4.8], fov: 48 }}
                shadows
                gl={{ antialias: true }}
            >
                <color attach="background" args={["#0f1117"]} />
                <fog attach="fog" args={["#0f1117", 14, 26]} />

                {/* Key light */}
                <directionalLight
                    position={[4, 7, 4]}
                    intensity={1.8}
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                    shadow-camera-far={20}
                    shadow-camera-left={-6}
                    shadow-camera-right={6}
                    shadow-camera-top={6}
                    shadow-camera-bottom={-6}
                />
                {/* Fill light */}
                <pointLight
                    position={[-3, 3, 2]}
                    intensity={0.6}
                    color="#c0d8ff"
                />
                {/* Monitor screen bounce */}
                <pointLight
                    position={[0, 1.2, -0.3]}
                    intensity={0.4}
                    color="#2a6aff"
                />
                <ambientLight intensity={0.35} />

                {/* Scene — table surface at y=0 */}
                <group position={[0, 0, 0]}>
                    <Desk />
                    <MonitorRaiser />
                    <UltraWideMonitor />
                    <Laptop />
                    <PS5Console />
                </group>

                <ContactShadows
                    position={[0, -1.63, 0]}
                    opacity={0.55}
                    scale={12}
                    blur={2.8}
                    far={2}
                />

                <Environment preset="city" />

                <OrbitControls
                    enablePan={false}
                    minPolarAngle={Math.PI / 10}
                    maxPolarAngle={Math.PI / 2.1}
                    minDistance={3}
                    maxDistance={10}
                    target={[0, 0.5, 0]}
                />
            </Canvas>
        </div>
    );
}
