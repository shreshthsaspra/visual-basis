import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Html, OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Testing.css'


function Model(props) {
  
  const { nodes, materials } = useGLTF('/earth.gltf')
  return (
   
  <group rotation={[-Math.PI / 2, 0, Math.PI]} {...props} dispose={null}>
      <mesh geometry={nodes['URF-Height_Lampd_Ice_0'].geometry} material={materials.Lampd_Ice} />
      <mesh geometry={nodes['URF-Height_watr_0'].geometry} material={materials.watr} material-roughness={0} />
      <mesh geometry={nodes['URF-Height_Lampd_0'].geometry} material={materials.Lampd} material-color="lightgreen">
       
        <group position={[0, 0, 1.3]} rotation={[0, 0, Math.PI]}>
         
        </group>
      </mesh>
    </group>
   
  
  )
}

// Let's make the marker into a component so that we can abstract some shared logic
function Marker({ children, ...props }) {
  // This holds the local occluded state
  const [occluded, occlude] = useState()
  return (
    <Html
      // 3D-transform contents
      transform
      // Hide contents "behind" other meshes
      occlude
      // Tells us when contents are occluded (or not)
      onOcclude={occlude}
      // We just interpolate the visible state into css opacity and transforms
      style={{ transition: 'all 0.2s', opacity: occluded ? 0 : 1, transform: `scale(${occluded ? 0.25 : 1})` }}
      {...props}>
      {children}
    </Html>
  )
}

export default function Viewer() {
  return (
    <div className="threed">
<Canvas camera={{ position: [5, 0, 0], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <Model position={[0, 0.25, 0]} />
      <Environment preset="city" />
      <ContactShadows frames={1} scale={5} position={[0, -1, 0]} far={1} blur={5} opacity={0.5} color="#204080" />
      <OrbitControls />
    </Canvas>
    </div>
    
  )
}
