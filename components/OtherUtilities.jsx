import React, { useState, useEffect } from 'react';
import '../components/css/otherUtilities.css';

const OtherUtilities = () => {
  const [icons, setIcons] = useState([
    {
      src: 'public/images/logoNBPDCL.png',
      alt: 'NBPDCL',
      name: 'NBPDCL',
    },
    {
      src: '../public/images/logoSBPDCL.png',
      alt: 'SBPDCL',
      name: 'SBPDCL',
    },
    {
      src: '../public/images/logoBSPGCL.png',
      alt: 'BSPGCL',
      name: 'BSPGCL',
    },
    
    // Add more icons as needed
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000); // 2 seconds

    return () => clearInterval(intervalId);
  }, [icons.length]);

  return (
    <div className="other-utilities-container">
      <ul className="other-utilities-list" style={{ transform: `translateX(-${currentIndex * 120}px)` }}>
        {icons.concat(icons).map((icon, index) => (
          <li
            key={index}
            className={`other-utilities-item ${index % icons.length === currentIndex ? 'active' : ''}`}
          >
            <img src={icon.src} alt={icon.alt} />
            <p>{icon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherUtilities;
