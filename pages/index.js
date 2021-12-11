import Head from "next/head";
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Home = () => {
  return (
    <div className="flex-auto">
      <Head>
        <title>Tushar Debnath</title>
      </Head>
      <div className="bg-black w-full h-60 ">
        <Canvas className="z-10">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
        
      </div>
      <div className="flex-auto mx-auto p-12  -m-40  z-50 ">
        <img src="./td.png" width={200} className="mx-auto mb-4" />
        <div className=" font-serif text-6xl text-center font-bold mb-2 antialiased text-gray-800">
          Tushar Debnath
        </div>

        <div className=" text-xl font-medium mx-24  text-center text-gray-800  leading-normal antialiased">
          Product Designer and Design Technologist.
        </div>
      </div>
    </div>
  );
};

export default Home;
