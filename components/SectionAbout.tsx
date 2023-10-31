const About = ({text}: {text:string[]}) => {
  return (
    <section id='ABOUT'>
        <h1>{text[0]}</h1>
        <p>{text[1]}</p>
        <br/>
        <br/>
        <p>{text[2]}</p>
        <br/>
        <br/>
        <h1>{text[3]}</h1>
        <p>{text[4]}</p>

    </section>
  );
};

export default About;
