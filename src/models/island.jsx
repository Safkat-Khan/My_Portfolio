/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import { useRef,useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from '../assets/3d/island.glb';
import { a } from '@react-spring/three'

const Island = ({ isRoating,setRotating, ...props}) => {
  const islandRef = useRef();

  const{ gl,viewport } = useThree();

  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotaationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopProgation();
    e,preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  
    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopProgation();
    e,preventDefault();
    setIsRotating(false);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = (clientX - lastX.current) / viewport.width;
    islandRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = clientX;
    rotaationSpeed.current = delta * 0.01 *Math.PI;
  }

  const handlePointerMove = (e) => {
    e.stopProgation();
    e,preventDefault();

    if(isRoating) handlePointerUp(e);

  }

const handleKeyDown = (e) => {
  if(e.key === 'ArrowLeft'){
    if(!isRoating) setIsRotating(true);
    islandRef.current.rotation.y += 0.01 *Math.PI;
  }
  else if(e.key === 'ArrowRight'){
    if(!isRoating) setRotating(true);
    islandRef.current.rotation.y -= 0.01 *Math.PI;
  }
}

const handleKeyUp = (e) => {
  if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
    setRotating(false);
  }
}

  useEffect(() => {
    document.addEventListener('pointerdown',handlePointerDown);
    document.addEventListener('pointerup',handlePointerUp);
    document.addEventListener('pointermove',handlePointerMove);
    document.addEventListener('keydown',handleKeyDown);
    document.addEventListener('keyup',handleKeyUp);

    return () => {
      document.removeEventListener('pointerdown',handlePointerDown);
      document.removeEventListener('pointerup',handlePointerUp);
      document.removeEventListener('pointermove',handlePointerMove);
      document.removeEventListener('keydown',handleKeyDown);
      document.removeEventListener('keyup',handleKeyUp);
    }

  },[gl, handlePointerDown, handlePointerUp, handlePointerMove]);


  return (
    <a.group ref={islandRef} {...props} >
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}

export default Island;
