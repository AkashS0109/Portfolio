import React, { useState, useEffect } from 'react';
import './project.css';
import img1 from '../images/s2.png';
import img2 from '../images/s1.png';
import img3 from '../images/s3.png';
import img11 from '../images/s11.png';
import img12 from '../images/s12.png';
import img13 from '../images/s13.png'




export default function Project() {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const projects = [
    { title: 'Project 1',
       description: 'This modern clothing website, built using HTML, CSS, and JavaScript, offers a seamless shopping experience with an interactive user interface. Users can easily register and log in to their accounts, browse a wide range of stylish apparel, and add their favorite items to the cart. The sleek design and user-friendly features ensure a pleasant and efficient shopping journey.',
        images: [img1, img2, img3] },
    { title: 'Project 2',
       description: 'This dynamic e-commerce website, developed with React.js and styled-components, offers a smooth and engaging shopping experience. Featuring a variety of products, including groceries, clothing, and more, the site showcases sleek animations and a modern design. Users can effortlessly log in and out, browse through categories, and enjoy a seamless journey through the platform intuitive interface.',
        images: [img11, img12, img13] },
  
    // Additional projects can be added here
  ];

  return (
    <div className='most-out'>
      <h1>Projects</h1>
      <div className='outer'>
        {projects.map((project, index) => (
          <div key={index} className='card'>
            <img src={project.images[hoveredImageIndex]} alt={`Project ${index + 1}`} />
            <div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
