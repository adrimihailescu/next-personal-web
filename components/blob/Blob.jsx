"use client";
import { MeshDistortMaterial, GradientTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Blob = (props) => {
  return (
    <Canvas {...props}>
      <mesh scale={2}>
        <ambientLight />
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial roughness={0} speed={5}>
          <GradientTexture
            stops={[0, 0.8, 1]}
            colors={["#e63946", "#f1faee", "#a8dadc"]}
            size={100}
          />
        </MeshDistortMaterial>
      </mesh>
    </Canvas>
  );
};

export default Blob;
