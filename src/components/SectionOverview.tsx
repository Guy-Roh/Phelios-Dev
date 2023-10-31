import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Model from './reactor.tsx'; 
import Image from '../components/Image.tsx';

type SectionProps = {
    text: string[],
    textTitles: string[]
}


const SectionOverview = ({text, textTitles}:SectionProps) => {
    const defaultMaterialProps = {
        shellColor: "#4b4b4b",
        reactorColor: "orange",
        roughness: 0.5,
        metalness: 1
    };

    return (
        <section id="OVERVIEW">
            <h1 id='overview-title'>{textTitles[0]}</h1>
            <div className="overview-card">
                <div className="overview-text">
                    <h2>
                        {textTitles[1]}
                    </h2>
                    <p>{text[0]}</p>
                </div>
                <div className="canvas-container" id="animation-overview" style={{width: '30vw', height: '100%' }}>
                <Canvas  camera={{ position: [0, 0,4 ] }}>
                    <ambientLight intensity={0} />
                    <directionalLight intensity={2} color="white" position={[-20, -1, 0]} />
                    <Environment files="/assets/textures/smallroom.hdr" background={false} />
                    <Suspense fallback={null}>
                    <Model materialProps={defaultMaterialProps} rotation={[0, 0, 0]}/>
                    </Suspense>
                    <OrbitControls enableRotate={true} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI/2} />
                </Canvas>
                <h1 id='canvasArrow'>⭮</h1>
                </div>
            </div>
            <div className="overview-card">
                <Image src="/assets/img/render_plug_3.png" alt="Picture of top side reactor with visible power plug"/>
                <div className="overview-text">
                    <h2>
                        {textTitles[2]}
                    </h2>
                    <p>{text[1]}</p>
                </div>
            </div>
            <div className="overview-card">
                <div className="overview-text">
                    <h2>
                        {textTitles[3]}
                    </h2>
                    <p>{text[2]}</p>
                </div>
                <Image src="/assets/img/render_usb_3.png" alt="Picture of bottom side reactor with visible USC plug"/>
            </div>
        </section>
        );
    }
export default SectionOverview;
