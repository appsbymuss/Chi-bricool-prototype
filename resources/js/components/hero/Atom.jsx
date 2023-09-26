import React, { useMemo } from "react";
import { Line, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// You can draw the shape in this way if you do not want to import a ready-to-use 3D model.
const Shape = () => {
  const points = useMemo(
    () => [
      new THREE.Vector3(-0.4, 0.2, 0),
      new THREE.Vector3(-0.2, 0.6, 0),
      new THREE.Vector3(0, 0.6, 0),
      new THREE.Vector3(0.2, 0.5, 0),
      new THREE.Vector3(0.5, 0.3, 0),
      new THREE.Vector3(0.5, 0, 0),
      new THREE.Vector3(0.2, -0.2, 0),
      new THREE.Vector3(0.1, -0.4, 0),
      new THREE.Vector3(-0.1, -0.4, 0),
      new THREE.Vector3(-0.4, -0.2, 0),
      new THREE.Vector3(-0.5, -0.1, 0),
      new THREE.Vector3(-0.6, 0.1, 0),
      new THREE.Vector3(-0.4, 0.2, 0),
    ],
    []
  );
  return (
    <group>
      <Line
        worldUnits
        points={points}
        color="#d32f2f"
        lineWidth={0.3}
        closed
      />
      <Sphere args={[0.3, 64, 64]}>
        <meshBasicMaterial color="#d32f2f" toneMapped={false} />
      </Sphere>
    </group>
  );
};

const Atom = () => {
  return (
    <>
      <Shape />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
    </>
  );
};

export default Atom;
