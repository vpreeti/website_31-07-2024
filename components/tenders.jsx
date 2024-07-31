import React, { useState } from 'react';
import '../components/css/tenders.css';

function Tenders() {
  const [activeButtonA, setActiveButtonA] = useState('left');
  const [activeButtonB, setActiveButtonB] = useState('right');
  const [showTendersA, setShowTendersA] = useState(true);
  const [showCircularA, setShowCircularA] = useState(false);
  const [showTendersB, setShowTendersB] = useState(true);
  const [showCircularB, setShowCircularB] = useState(false);

  const handleButtonClick = (section, type) => {
    if (section === 'A') {
      setShowTendersA(type === 'left');
      setShowCircularA(type === 'circularA');
      setActiveButtonA(type);
    } else {
      setShowTendersB(type === 'right');
      setShowCircularB(type === 'circularB');
      setActiveButtonB(type);
    }
  };

  return (
    <div className="container1">
      <div className="section">
        <div className="button-container">
          <button
            onClick={() => handleButtonClick('A', 'left')}
            className={`button ${activeButtonA === 'left' ? 'active' : ''}`}
          >
            Tenders
          </button>
          <button
            onClick={() => handleButtonClick('A', 'circularA')}
            className={`button ${activeButtonA === 'circularA' ? 'active' : ''}`}
          >
            Circulars
          </button>
        </div>
        <div className="content-container">
          {showTendersA && (
            <div className="content">
              {/* Display Tenders Content for Section A */}
              <div className="circular">
                <div className="document-icon">
                  <img src="../public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="circular-details">
                  <h6>NIT No. 26/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Accounts</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="circular">
                <div className="document-icon">
                  <img src="../public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="circular-details">
                  <h6>NIT No. 27/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Accounts</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="circular">
                <div className="document-icon">
                  <img src="../public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="circular-details">
                  <h6>NIT No. 28/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Accounts</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              {/* Add more content as needed */}
              <button className="view-more-button">View More</button>
            </div>
          )}
          {showCircularA && (
            <div className="content">
              {/* Display Circulars Content for Section A */}
              <div className="circular">
                <div className="document-icon">
                  <img src="../public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="circular-details">
                  <h6>Schedule of Rate (SOR) of BSPTCL for the FY 2024-25</h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="circular">
                <div className="document-icon">
                  <img src="../public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="circular-details">
                  <h6>Regarding Standard Bidding Documents (SBD)- Rev 11 for turnkey projects for BSPTCL vide OO No-91 dated 24.09.2021</h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>
              {/* Add more content as needed */}
              <button className="view-more-button">View More</button>
            </div>
          )}
        </div>
      </div>

      <div className="separator"></div>

      <div className="section">
        <div className="button-container">
          <button
            onClick={() => handleButtonClick('B', 'right')}
            className={`button ${activeButtonB === 'right' ? 'active' : ''}`}
          >
            Tenders
          </button>
          <button
            onClick={() => handleButtonClick('B', 'circularB')}
            className={`button ${activeButtonB === 'circularB' ? 'active' : ''}`}
          >
            Circulars
          </button>
        </div>
        <div className="content-container">
          {showTendersB && (
            <div className="content">
              {/* Display Tenders Content for Section B */}
              <div className="circular">
                <div className="document-icon">
                  <img src="../public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="circular-details">
                  <h6>NIT No. 26/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Accounts</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="circular">
                <div className="document-icon">
                  <img src="../public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="circular-details">
                  <h6>NIT No. 27/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Accounts</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="circular">
                <div className="document-icon">
                  <img src="../public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="circular-details">
                  <h6>NIT No. 28/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Accounts</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              {/* Add more content as needed */}
              <button className="view-more-button">View More</button>
            </div>
          )}
          {showCircularB && (
            <div className="content">
              {/* Display Circulars Content for Section B */}
              <div className="circular">
                <div className="document-icon">
                  <img src="../public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="circular-details">
                  <h6>Schedule of Rate (SOR) of BSPTCL for the FY 2024-25</h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="circular">
                <div className="document-icon">
                  <img src="../public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="circular-details">
                  <h6>Regarding Standard Bidding Documents (SBD)- Rev 11 for turnkey projects for BSPTCL vide OO No-91 dated 24.09.2021</h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>
              {/* Add more content as needed */}
              <button className="view-more-button">View More</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tenders;
