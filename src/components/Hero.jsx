import React, { useState } from 'react';
import Image from '../images/ghj.png';
import LinkdeinImg from '../images/link.svg';
import Linkdeindark from '../images/linkdark.svg';
import GithubImg from '../images/git.svg';
import Githubdark from '../images/image.png';
import  '../Styles/herostyle.css';
import sun from '../images/dun.png';
import moon from '../images/m2.png';
import CV from '../Resume.pdf';
import { useTheme } from './ThemeContext';
import TypingEffect from './TypingEffect';

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const GithubIcon = theme === 'light' ? GithubImg : Githubdark;
  const LinkdeinIcon = theme === 'light' ? LinkdeinImg : Linkdeindark;
  
  const headingText = "Akash Singh";
  const subheadingText = "Front-End Developer";

  const [headingComplete, setHeadingComplete] = useState(false);

  return (
    <section id="hero" className='container' >
      <div className='colorModeContainer'>
        <img src={Image} alt='Image Process' id='myimg' className='hero'/>
        <img src={themeIcon} alt='color mode' onClick={toggleTheme} className='colorMode' />
      </div>
      <div className='info'>
        <h1>
          <TypingEffect text={headingText} speed={100} onComplete={() => setHeadingComplete(true)} />
        </h1>
        {headingComplete && (
          <h2>
            <TypingEffect text={subheadingText} speed={100} />
          </h2>
        )}
        <span>
          <a href='h' target='_blank'>
            <img src={LinkdeinIcon} alt='' />
          </a>
          <a href='h' target='_blank'>
            <img src={GithubIcon} alt='' />
          </a>
        </span>
        <p className='description'>
          With a passion for developing modern React apps for commercial businesses.
        </p>
        <a href={CV}>
          <button className='hover' download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}
