import React from 'react';
import '../components/css/otherUtilities.css';

const OtherUtilities = () => {
  const icons = [
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
      }
    // Add more icons as needed
  ];

  return (
    <div className="other-utilities-container">
      <ul className="other-utilities-list">
        {icons.map((icon, index) => (
          <li key={index} className="other-utilities-item">
            <img src={icon.src} alt={icon.alt} />
            <p>{icon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherUtilities;
