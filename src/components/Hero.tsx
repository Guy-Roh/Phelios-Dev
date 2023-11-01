import React, { useEffect } from "react";
import Logo from "../components/Logo"
import { useState } from "react";

const Hero = ({text}: {text:string[]}) => {

    /*Sets up the scroll event listener to be used for the side menu*/
    const [isPastHero, setIsPastHero] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > (window.innerHeight * 0.8)) {
          setIsPastHero(true);
        } else {
          setIsPastHero(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    /*Sets up the click event listener for the side menu*/
    const handleClick = (sectionIndex: number) => {
        const sectionNames = ['OVERVIEW', 'BLUEPRINT', 'COLOURS', 'ABOUT'];
        const element = document.getElementById(sectionNames[sectionIndex]);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

/*Main return statement*/
    return(
  <div className="hero">
    <div className="hero_menu_background"/>
    <video autoPlay loop muted id="prev_vid">
    <source src="/assets/img/prev_vid_2.webm" type="video/webm" />
    </video>
    <div id="hero_menu_l" className="hero_menu">
        <div className="menu_item" key={0} onClick={() => handleClick(0)}>
        {text[1]}
        </div>
        <div className="menu_item" key={1} onClick={() => handleClick(1)}>
        {text[2]}
        </div>
    </div>
    <div id="hero_menu_r" className="hero_menu">
        <div className="menu_item" key={2} onClick={() => handleClick(2)}>
        {text[3]}
        </div>
        <div className="menu_item" key={3} onClick={() => handleClick(3)}>
        {text[4]}
        </div>
    </div>
    <div id="hero_render"></div>
    <div className="hero_menu" id="hero_title">
    <Logo/>PHELIOS </div>
    <div id="slogan_banner">{text[0]}</div>
    {isPastHero &&(
    <div id="side-menu"> ☰
    <div className="menu_item" key={0} onClick={() => handleClick(0)}>
    {text[1]}
    </div>
    <div className="menu_item" key={1} onClick={() => handleClick(1)}>
    {text[2]}
    </div>
    <div className="menu_item" key={2} onClick={() => handleClick(2)}>
    {text[3]}
    </div>
    <div className="menu_item" key={3} onClick={() => handleClick(3)}>
    {text[4]}
    </div>
</div>
    )}
  </div>
    )
};

export default Hero;