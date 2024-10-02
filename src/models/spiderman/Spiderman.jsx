import React, { useRef } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations, Shadow } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import modalPath from './spiderman-transformed.glb'

 const Spiderman = (props) => {
  const group = useRef()
  const { scene, animations } = useGLTF(modalPath)
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <Shadow 
        position={[0, -0.5, 0]} 
        scale={[2, 2, 2]} 
        color="black" 
        opacity={0.3} 
      />
        <skinnedMesh name="Object_121" geometry={nodes.Object_121.geometry} material={materials.kingpin_wp03} skeleton={nodes.Object_121.skeleton} />
        <skinnedMesh name="Object_123" geometry={nodes.Object_123.geometry} material={materials.hero_spiderman01_S04_02} skeleton={nodes.Object_123.skeleton} />
        <skinnedMesh name="Object_125" geometry={nodes.Object_125.geometry} material={materials.SpiderMan_web02} skeleton={nodes.Object_125.skeleton} />
        <skinnedMesh name="Object_127" geometry={nodes.Object_127.geometry} material={materials.SpiderMan_web02} skeleton={nodes.Object_127.skeleton} />
        <skinnedMesh name="Object_129" geometry={nodes.Object_129.geometry} material={materials.SpiderMan_web02} skeleton={nodes.Object_129.skeleton} />
        <skinnedMesh name="Object_131" geometry={nodes.Object_131.geometry} material={materials.hero_spiderman01_S04_01} skeleton={nodes.Object_131.skeleton} />
        <skinnedMesh name="Object_133" geometry={nodes.Object_133.geometry} material={materials.hero_spiderman01_S04_02} skeleton={nodes.Object_133.skeleton} />
        <skinnedMesh name="Object_135" geometry={nodes.Object_135.geometry} material={materials.kingpin_wp03} skeleton={nodes.Object_135.skeleton} />
        <skinnedMesh name="Object_137" geometry={nodes.Object_137.geometry} material={materials.SpiderMan_web02} skeleton={nodes.Object_137.skeleton} />
        <skinnedMesh name="Object_139" geometry={nodes.Object_139.geometry} material={materials.SpiderMan_web02} skeleton={nodes.Object_139.skeleton} />
        <skinnedMesh name="Object_141" geometry={nodes.Object_141.geometry} material={materials.SpiderMan_web02} skeleton={nodes.Object_141.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload(modalPath)
export default Spiderman;