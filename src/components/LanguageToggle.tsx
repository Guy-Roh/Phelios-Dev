import React from 'react';

function LanguageToggle({ handleClick}:any) {
    const [currentLanguage, setCurrentLanguage] = React.useState('ᐳ EN');
  const toggleLanguage = () => {
    handleClick((prevIndex:any) => (prevIndex === 0 ? 1 : 0));
    setCurrentLanguage((prevLanguage) => (prevLanguage === 'ᐳ EN' ? 'ᐳ NL' : 'ᐳ EN'));
  };

  return (
    <button type="button" id='languageButton' onClick={toggleLanguage}>
      {currentLanguage}
    </button>
  );
}

export default LanguageToggle;
