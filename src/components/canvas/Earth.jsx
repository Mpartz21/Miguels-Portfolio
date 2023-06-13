import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"


// const Earth = () => {

//   const earth = useGLTF('/planet/scene.gltf', true);

//   return (
//     <primitive 
//     object={earth.scene} 
//     scale={2.2}
//     position-y={0}
//     rotation-y={0}
//     />
//   )
// }

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{preserveDrawingBuffer: true}}
      camera={{
        position: [0, 0, 5],
        fov: 45,
        far:2000,
        near: 0.1,
        }}>
      <Suspense fallback={<CanvasLoader/>}/>
      <OrbitControls 
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      {/* <Earth/>   */}
    </Canvas>
  )
}



export default EarthCanvas