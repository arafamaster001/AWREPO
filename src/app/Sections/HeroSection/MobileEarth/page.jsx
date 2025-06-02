"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

// Component to load and rotate Earth model
function RotatingEarth({ rotationSpeed }) {
  const earthRef = useRef();
  const { scene } = useGLTF("/models/earth/scene.gltf");

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <primitive
      ref={earthRef}
      object={scene}
      scale={0.95}
      rotation={[-0.01, -0.2, -0.1]}
      position={[0, 0, 0]}
    />
  );
}

// Main Page Component
export default function MobileEarth() {
  const [rotationSpeed, setRotationSpeed] = useState(0.002);

  // Speed up on hold (mouse or touch)
  useEffect(() => {
    const increaseSpeed = () => setRotationSpeed(0.01);
    const resetSpeed = () => setRotationSpeed(0.002);

    window.addEventListener("mousedown", increaseSpeed);
    window.addEventListener("mouseup", resetSpeed);
    window.addEventListener("touchstart", increaseSpeed);
    window.addEventListener("touchend", resetSpeed);

    return () => {
      window.removeEventListener("mousedown", increaseSpeed);
      window.removeEventListener("mouseup", resetSpeed);
      window.removeEventListener("touchstart", increaseSpeed);
      window.removeEventListener("touchend", resetSpeed);
    };
  }, []);

  return (
    <div className="h-[700px] w-[700px] xl:w-[500px] xl:h-[500px] z-20">
      <div className="w-full flex items-center justify-center h-full">
        <Canvas shadows camera={{ position: [5, 5, 10], fov: 10 }}>
          {/* Lights */}
          <ambientLight intensity={5} />
          <hemisphereLight intensity={3} groundColor="#000000" />
          <spotLight
            position={[-20, 50, 10]}
            penumbra={1}
            intensity={5}
            castShadow
          />

          {/* 3D Earth */}
          <RotatingEarth rotationSpeed={rotationSpeed} />

          {/* Controls (locked except horizontal view) */}
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>
    </div>
  );
}

// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { useRef } from "react";

// // Component to load and rotate Earth model
// function RotatingEarth() {
//   const earthRef = useRef();
//   const { scene } = useGLTF("/models/earth/scene.gltf");

//   useFrame(() => {
//     if (earthRef.current) {
//       earthRef.current.rotation.y += 0.002;
//     }
//   });

//   return (
   
//     <primitive
//       ref={earthRef}
//       object={scene}
//       scale={0.95}
//       rotation={[-0.01, -0.2, -0.1]}
//       position={[0, 0, 0]} // 👈 Centered Earth
//     />
    
//   );
// }

// // Main Page Component
// export default function MobileEarth() {
//   return (
//     <div className="h-[700px] w-[700px] xl:w-[500px] xl:h-[500px] z-20">
//       <div className=" w-full flex items-center justify-center h-full">
//         <Canvas
//           shadows
//           camera={{ position: [5, 5, 10], fov: 10 }} // Adjusted camera position
//         >
//           {/* Lights for visibility */}
//           <ambientLight intensity={5} />
//           <hemisphereLight intensity={3} groundColor="#000000" />
//           {/* <pointLight intensity={5} position={[10, 10, 10]} /> */}
//           <spotLight
//             position={[-20, 50, 10]}
//             // angle={0.3}
//             penumbra={1}
//             intensity={5}
//             castShadow
//           />

//           {/* 3D Earth */}
//           <RotatingEarth />

//           {/* Controls: only horizontal rotation */}
//           <OrbitControls
//             enableZoom={false}
//             enableRotate={false}
//             enablePan={false}
//             maxPolarAngle={Math.PI / 3}
//             minPolarAngle={Math.PI / 3}
//           />
//         </Canvas>
//       </div>
//     </div>
//   );
// }