import React, { useRef } from 'react';
import Image from './Image';

const SectionBlueprint= ({text}: {text:string[]}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id='BLUEPRINT' >
      <h1>{text[0]}</h1>
      <Image src='/assets/img/blueprint4_2.png' alt='blueprint'/>
      <div className="blueprint-container">
        
        <div 
          id="blueprint-vid" 
          onMouseOver={() => videoRef.current?.play()} 
          onMouseOut={() => videoRef.current?.pause()}
        >
            <div className="hover-overlay"></div>
            <video ref={videoRef} src="/assets/img/blueprint_anim.mp4" muted loop></video>

        </div>
        <div className="blueprint-text">
          <h2>{text[1]}</h2>
          <p>{text[2]}<br/><br/>{text[3]}</p>
          <br/>
          <h2>{text[4]}</h2>
          <p>{text[5]}<br/><br/>{text[6]}</p>
        </div>
      </div>
    </section>
  );
};

export default SectionBlueprint;
