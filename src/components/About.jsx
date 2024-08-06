import '../Styles/about-us.css';
import html1 from '../images/html-5.svg';
import css1 from '../images/css.svg';
import Javasc from '../images/Javascript.png';
import Rect1 from '../images/react.svg';
import Node1 from '../images/node-js.svg';
import Expres1 from '../images/express.svg';
import Post from '../images/postman.svg';
import { useState } from 'react';

export default function About() {
  const [hoveredImageId, setHoveredImageId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredImageId(id);
  };

  const handleMouseLeave = () => {
    setHoveredImageId(null);
  };

  const skills = [
    { id: 'HTML', 
      icon: html1,
      alt: 'HTML Icon' 
    },
    { id: 'CSS', 
      icon: css1,
       alt: 'CSS Icon'
       },
    { id: 'JavaScript', 
      
      icon: Javasc, 
      alt: 'JavaScript Icon'
     },
    { id: 'React', 
      icon: Rect1,
       alt: 'React Icon' },
    { id: 'Node', 
      icon: Node1,
      alt: 'Node.js Icon'
     },
    { id: 'Express',
       icon: Expres1,
        alt: 'Express Icon'
       },
    { id: 'Postman', 
      icon: Post, 
      alt: 'Postman Icon'
     },
  ];

  return (
    <section className='about-container'>
      <div className='about-us-theory'>
        <h1>About Me</h1>
        <p>
          Hello! My name is Akash Singh, and I am a recent MCA graduate. 
          With a strong foundation in computer science and a passion for web development,
          I have honed my skills in HTML, CSS, JavaScript, React.js, and Node.js.
        </p>
        <p>
          I always like to find the solution to a problem that helps me grow my skills better.
          I am particularly excited about the ever-evolving field of web development,
          staying up-to-date with the latest trends and technologies, and I am always eager to learn more and improve my craft.
        </p>
      </div>
      <div className='about-us-icons'>
        <h1>Skills</h1>
        <div className='skills-icons'>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className='icon-container'
              onMouseEnter={() => handleMouseEnter(skill.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={skill.icon} alt={skill.alt} />
              {hoveredImageId === skill.id && (
                <div className='hovered-message'>{skill.id}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
