"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function AnimatedTorusKnot() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <TorusKnot ref={meshRef} args={[1, 0.3, 256, 32]}>
                <MeshDistortMaterial
                    color="#34d399"
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.2}
                    metalness={0.6}
                />
            </TorusKnot>
        </Float>
    );
}

function ParticleField() {
    const particlesRef = useRef<THREE.Points>(null);
    const particleCount = 200;

    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i += 3) {
            pos[i] = (Math.random() - 0.5) * 10;
            pos[i + 1] = (Math.random() - 0.5) * 10;
            pos[i + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, []);

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geo;
    }, [positions]);

    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
            particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
        }
    });

    return (
        <points ref={particlesRef} geometry={geometry}>
            <pointsMaterial size={0.03} color="#10b981" transparent opacity={0.8} />
        </points>
    );
}

export default function Scene3D() {
    return (
        <div className="scene-container">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#10b981" />
                <pointLight position={[-10, -10, -10]} intensity={0.8} color="#059669" />
                <spotLight position={[0, 10, 0]} intensity={1} angle={0.3} color="#ffffff" />
                <AnimatedTorusKnot />
                <ParticleField />
            </Canvas>
        </div>
    );
}
