import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import LinkedinIcon from './LinkedinIcon';
import Scene from './Scene/Scene';
// import PortfolioContext from '../../context/context';

const Header = () => {
  // const { hero } = useContext(PortfolioContext);
  // const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {/* {title || 'Hi, my name is'}{' '} */}
            Hello, my name is
            {/* <span className="text-color-main">{name || 'Your Name'}</span> */}
            <span className="text-color-main"> Alessandro</span>
            <br />
            {/* {subtitle || "I'm the Unknown Developer."} */}
            I'm a frontend engineer based in Europe.
            <br />
            The site is under construction.
          </h1>
          <a href="https://www.linkedin.com/in/alessandro-pucci-2b0537171/" >
            <LinkedinIcon />
          </a>
        </Fade>
        {/* <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade> */}
      </Container>
      <Scene />
    </section>
  );
};

export default Header;
