import React from 'react';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.leftContent}>
        <p style={styles.contactInfo}>
          <span style={styles.contactHeader}>Contact Information</span><br />
          Camarines Norte State College, Information Technology Services Office<br />
          F. Pimentel Avenue, Daet, 4600 Camarines Norte, Philippines<br />
          Telephone No: (054) 727-2672 or 440-1199<br />
          PICRO Mobile No: 09688983078 | 09171439973<br />
          Mobile No: 09190042143<br />
          Email: <u>president@cnscedu.ph</u>
        </p>
      </div>
      <div style={styles.rightContent}>
        <div style={styles.helpContainer}>
          <span style={styles.help}>Help</span>
          <div style={styles.iconContainer}>
            <a href="https://twitter.com" style={styles.iconLink}><FaTwitter size={24} /></a>
            <a href="https://facebook.com" style={styles.iconLink}><FaFacebook size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#8D0E0E', // Changed to red background
    color: 'white', // Changed text color to white
    padding: '10px 20px', // Added padding on top and bottom, and 20px on left and right
    textAlign: 'left',
    borderTop: '1px solid #ddd',
    position: 'fixed',
    width: '100%',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between', // Align items with space between them
    alignItems: 'center',
  },
  leftContent: {
    flex: 1, // Takes up remaining space on the left
    paddingLeft: '10px', // Additional padding on the left side
  },
  rightContent: {
    flex: 1, // Takes up remaining space on the right
    textAlign: 'right', // Align content to the right
    paddingRight: '20px', // Additional padding on the right side
  },
  contactInfo: {
    margin: 0,
    padding: '10px',
    lineHeight: '1.6',
    fontSize: '12px',
  },
  contactHeader: {
    fontSize: '20px',
  },
  helpContainer: {
    display: 'flex',
    flexDirection: 'column', // Align items in a column
    alignItems: 'flex-end', // Align items to the right
  },
  help: {
    marginRight: '70px',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '50px',
  },
  iconLink: {
    margin: '5px', // Adjust margin for spacing between icons
    color: 'white', // Changed icon color to white
    textDecoration: 'none',
  },
};

export default Footer;
