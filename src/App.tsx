import Hero from '../components/Hero';
import SectionOverview from '../components/SectionOverview';
import SectionBlueprint from '../components/SectionBlueprint';
import SectionColours from '../components/SectionColours';
import SectionAbout from '../components/SectionAbout';
import LanguageToggle from '../components/LanguageToggle';
import PageText from '../public/assets/data/page_text.json';
import { useState } from 'react';
import './App.css';

type PageTextData = {
    heroText: string[],
    overviewText: string[],
    overviewTextTitles: string[],
    blueprintText: string[],
    blueprintTextTitles: string[],
    coloursText: string[],
    aboutText: string[],
}

function App() {
    const [languageIndex, setLanguageIndex] = useState(0);

  return (
    <>
        <LanguageToggle 
        handleClick={setLanguageIndex}/>
        <Hero 
        text={PageText[languageIndex].heroText}/>
        <SectionOverview 
        text={PageText[languageIndex].overviewText} 
        textTitles={PageText[languageIndex].overviewTextTitles} />
        <SectionBlueprint text={PageText[languageIndex].blueprintText}/>
        <SectionColours text={PageText[languageIndex].coloursText} />
        <SectionAbout text={PageText[languageIndex].aboutText}/>
    </>
  );
}

export default App;
