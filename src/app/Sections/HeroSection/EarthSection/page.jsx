"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

// Component to load and rotate Earth model
function RotatingEarth() {
  const earthRef = useRef();
  const { scene } = useGLTF("/models/earth/scene.gltf");

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
   
    <primitive
      ref={earthRef}
      object={scene}
      scale={0.9}
      rotation={[-0.01, -0.2, -0.1]}
      position={[0, 0, 0]} // 👈 Centered Earth
    />
    
  );
}

// Main Page Component
export default function EarthSection() {
  return (
    <div className="h-[350px] w-[350px] xl:w-[500px] xl:h-[500px]   rounded-full ">
      <div className="p-[5%] w-full flex items-center justify-center h-full">
        <Canvas
          shadows
          camera={{ position: [5, 5, 10], fov: 10 }} // Adjusted camera position
        >
          {/* Lights for visibility */}
          <ambientLight intensity={3} />
          <hemisphereLight intensity={1} groundColor="#000000" />
          {/* <pointLight intensity={5} position={[10, 10, 10]} /> */}
          <spotLight
            position={[-20, 50, 10]}
            // angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />

          {/* 3D Earth */}
          <RotatingEarth />

          {/* Controls: only horizontal rotation */}
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>
    </div>
  );
}

// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, SpotLight, useGLTF } from "@react-three/drei";
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
//   <mesh>
//     <hemisphereLight intensity={5}
//     groundColor="black"/>
//     <pointLight intensity={1}/>
//     <spotLight 
//     position={[-20,50,10]}
//     angle={0.12}
//     penumbra={1}
//     intensity={1}/>
//     <primitive ref={earthRef} object={scene} scale={4}
//     rotation={[-0.01,-0.2,-0.1]}
//     position={[0,0,0]}/>
//   </mesh>)
// }

// // Main Page Component
// export default function HeroSection() {
//   return (
//     <div className="w-[40vw] h-[80vh]  bg-black rounded-full">
//       <div className="p-[5%] w-full flex items-center justify-center h-full">
//       <Canvas
//       frameloop="demand"
//       shadows
//        camera={{ position: [20, 5, 5], fov:25 }}>
        
//         {/* <ambientLight intensity={0.5} /> */}
//         <RotatingEarth />
//         <OrbitControls enableZoom={false} 
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 2}/> 
//       </Canvas>
//       </div>
//     </div>
//   );
// }