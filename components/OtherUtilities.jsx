import React from 'react';
import '../components/css/otherUtilities.css';

const OtherUtilities = () => {
  const icons = [
    {
      src: 'images/logoNBPDCL.png',
      alt: 'NBPDCL',
      name: 'NBPDCL',
    },
    {
      src: 'images/logoSBPDCL.png',
      alt: 'SBPDCL',
      name: 'SBPDCL',
    },
    {
      src: 'images/logoBSPGCL.png',
      alt: 'BSPGCL',
      name: 'BSPGCL',
    },
    {
      src: 'images/logoPOSOCO.png',
      alt: 'POSOCO',
      name: 'POSOCO',
    },
    {
      src: 'images/logoPowergrid.png',
      alt: 'POWERGRID',
      name: 'POWERGRID',
    },
    // Add more icons as needed
  ];

  const repetitions = 3;
  const repeatedIcons = Array.from({ length: repetitions }, () => icons).flat();

  return (
    <div className="other-utilities-container">
      <div className="other-utilities-slider">
        <ul className="other-utilities-list">
          {repeatedIcons.map((icon, index) => (
            <li key={index} className="other-utilities-item">
              <img src={icon.src} alt={icon.alt} />
              <p>{icon.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OtherUtilities;
