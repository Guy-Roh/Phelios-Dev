import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type MaterialProperties = {
    shellColor: string;
    reactorColor: string;
    roughness: number;
    metalness: number;
};

type ModelProps = JSX.IntrinsicElements['group'] & { materialProps: MaterialProperties};

const Model: React.FC<ModelProps> = ({ materialProps, ...props }) => {
    const { nodes, materials } = useGLTF('/assets/models/reactor_5.glb') as any;

    const meshData = [
        {geometry: nodes.Cube001_1.geometry, material: "Brushed Steel 1"},
        {geometry: nodes.Cube001_2.geometry, material: "Carbon Black"},
        {geometry: nodes.Cube001_3.geometry, material: "Glass Panels"},
        {geometry: nodes.Cube001_4.geometry, material: "Light Reactor"},
        {geometry: nodes.Cube001_5.geometry, material: "Dark Steel"},
        {geometry: nodes.Cube001_6.geometry, material: "Rubber Button"},
        {geometry: nodes.Cube001_7.geometry, material: "Shell"},
        {geometry: nodes.Cube001_8.geometry, material: "Lights White"},
        {geometry: nodes.Cube001_9.geometry, material: "SVGMat.001"}
      ];
    // Mesh Data from conversion from glb to gltf

    useEffect(() => {
        let frameId: number;
    
        const loop = () => {
            const shellMaterial = materials['Shell'];
            const reactorMaterial = materials['Light Reactor'];
            if (shellMaterial) {
                const currentShellColor = new THREE.Color(shellMaterial.color.getHex());
                const targetShellColor = new THREE.Color(materialProps.shellColor);
                const newShellColor = currentShellColor.lerp(targetShellColor, 0.1);
                shellMaterial.color.set(newShellColor);
                shellMaterial.roughness = materialProps.roughness;
                shellMaterial.metalness = materialProps.metalness;
            }
    
            if (reactorMaterial) {
                const currentReactorEmissive = new THREE.Color(reactorMaterial.emissive.getHex());
                const targetReactorEmissive = new THREE.Color(materialProps.reactorColor);
                const newReactorEmissive = currentReactorEmissive.lerp(targetReactorEmissive, 0.1);
                reactorMaterial.emissive.set(newReactorEmissive);
                reactorMaterial.emissiveIntensity = 50;
            }
    
            frameId = requestAnimationFrame(loop);
        };
        loop();
    
        return () => cancelAnimationFrame(frameId);
    }, [materialProps]);
        // This useEffect hook will run every time the materialProps object changes and then changes the color of the shell and reactor, as well as the roughness and metalness of the shell using the object passed by the SectionColors component
        // The lerp and loop are to make the color change smooth



    return (
        <group {...props}>
            {meshData.map((mesh, index) => (
                <mesh 
                    key={index} 
                    geometry={mesh.geometry} 
                    material={materials[mesh.material]} 
                />
            ))}
        </group>
    );
        // This will take the meshdata declared above and map it to a mesh component with the geometry and material props set to the geometry and material of the meshdata object
};

export default Model;
