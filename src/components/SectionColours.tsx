import React, { useState, Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls} from '@react-three/drei';
import Model from './Reactor.tsx'; 
import Image from '../components/Image.tsx';

const SectionColours = ({text}: {text:string[]}) => {
    const materialPropsArray = [
        { colorName: "black", shellColor: "#4b4b4b", reactorColor: "orange", roughness: 0.5, metalness: 1 },
        { colorName: "pink", shellColor: "#f5b0ca", reactorColor: "#bd61ff", roughness: 0.1, metalness: 0 },
        { colorName: "blue", shellColor: "#5379b5", reactorColor: "#3de0fc", roughness: 0.5, metalness: 1 }
    ];

    const [currentProps, setCurrentProps] = useState(materialPropsArray[0]);

    const handleClick = (props: any) => {
        setCurrentProps(props);
    };

    return (
        <section id="COLOURS">
            <h1>{text[0]}</h1>
            <div id="colours-container">
            <div className="canvas-container">
                <Canvas style={{ position: 'relative', width: '500px', height: '500px' }} camera={{ position: [0, 0, 4] }}>
                    <ambientLight intensity={0} />
                    <directionalLight intensity={2} color="white" position={[-20, -1, 0]} />
                    <Environment files="/assets/textures/smallroom.hdr" background={false} />
                    <Suspense fallback={null}>
                        <Model materialProps={currentProps} />
                    </Suspense>
                    <OrbitControls enableRotate={true} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                </Canvas>
                <h2>{text[1]}</h2>
                <div className="button-container">
                    
                    <button className="colour-button" type="button" onClick={() => handleClick(materialPropsArray[0])}>{text[2]}</button>
                    <button className="colour-button" id="blue-button" type="button" onClick={() => handleClick(materialPropsArray[2])}>{text[3]}</button>
                    <button className="colour-button" id="pink-button" type="button" onClick={() => handleClick(materialPropsArray[1])}>{text[4]}</button>
                </div>
            </div>
            <Image src="/assets/img/colours.jpg" alt="3 reactors in different colour combinations" />
            </div>
        </section>
    );
};

export default SectionColours;
