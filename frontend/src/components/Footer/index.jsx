import React from 'react';
import { Container } from 'react-bootstrap';

const footerStyle = {
  backgroundColor: '#333940', // Dark background for contrast
  padding: '1rem 0', // Reduce vertical padding to make the footer smaller
  color: '#ffffff' // Ensure all text is white for contrast
};

const boldTextStyle = {
  fontWeight: 'bold',
  color: '#ffffff' // Ensure bold text is also white for contrast
};

const credHeadingStyle = {
  fontSize: '1.5rem', // Reduce font size for the heading
  backgroundColor: 'black', // White background color
  padding: '5px 10px', // Adjust padding for the heading
  display: 'inline', // Ensure inline display for the span containing "CRED"
  color: '#333940' // Adjust the color of the text for better contrast against the white background
};

const credTextStyle = {
  color: '#ffffff' // White text color for "CRED" keyword
};

const membersListStyle = {
  fontSize: '0.9rem', // Reduce font size for the member list
  fontWeight: 600, // Make the text a bit bolder
  color: '#ffffff' // Ensure members text is white for contrast
};

const Footer = () => {
  return (
    <div
      className="pb-0 mb-0 justify-content-center text-light"
      style={footerStyle}
    >
      <footer>
        <Container>
          <div className="row my-0 py-2"> {/* Reduce vertical padding */}
            <div className="col-12">
              <div className="row">
                <div className="col-xl-6 col-md-4 col-sm-4 col-12 my-auto mx-auto">
                  <h2
                    className="text-muted mb-md-0 mb-3 bold-text" // Adjust margin bottom
                    
                  >
                    <span style={credTextStyle}>CRED</span>
                  </h2>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-4 col-12">
                  <h3
                    className="text-muted bold-text mt-sm-0 mt-3" // Adjust margin top
                    style={boldTextStyle}
                  >
                    <b style={credTextStyle}>Members</b>
                  </h3>
                  <ul className="list-unstyled" style={membersListStyle}>
                    <li style={credTextStyle}>Abhinav</li>
                    <li style={credTextStyle}>Akanksha</li>
                    <li style={credTextStyle}>Karuna</li>
                    <li style={credTextStyle}>Subham</li>
                    <li style={credTextStyle}>Shivangi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
