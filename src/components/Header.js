import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../components/CNSC Logo - White Border.png';
import AdminLoginPage from '../pages/AdminLoginPage';
import CustomerLoginPage from '../pages/CustomerLoginPage';
import OfficeHeadLoginPage from '../pages/OfficeHeadLoginPage';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false); // Initially hide dropdown
  const [selectedRole, setSelectedRole] = useState('Administrator'); // Default selected role

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  const handleRoleChange = (role) => {
    console.log('Selected Role:', role);
    setSelectedRole(role); // Set selected role
    setShowDropdown(false); // Hide dropdown after selection
  };

  // Render different login pages based on selectedRole or default to AdminLoginPage
  const renderLoginPage = () => {
    switch (selectedRole) {
      case 'Administrator':
        return <AdminLoginPage />;
      case 'Customer':
        return <CustomerLoginPage />;
      case 'Office Head':
        return <OfficeHeadLoginPage />;
      default:
        return null; // Handle any other case as needed
    }
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={Logo} alt="Logo" style={styles.logo} />
        </div>
        <div style={styles.titleContainer}>
          <h1 style={styles.h1}>Camarines Norte State College</h1>
          <h2 style={styles.h2}>Customer Feedback System</h2>
        </div>
        <div style={styles.menuContainer}>
          <FaBars size={24} style={styles.menuIcon} onClick={toggleDropdown} />
          {showDropdown && (
            <div style={styles.dropdownContainer}>
              <div style={styles.customDropdown}>
                <div style={styles.dropdownItem} onClick={() => handleRoleChange('Administrator')}>
                  Administrator
                </div>
                <div style={styles.dropdownItem} onClick={() => handleRoleChange('Customer')}>
                  Customer
                </div>
                <div style={styles.dropdownItem} onClick={() => handleRoleChange('Office Head')}>
                  Office Head
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      {selectedRole !== null && renderLoginPage()} {/* Render selected login page */}
    </>
  );
};

const styles = {
  header: {
    backgroundColor: '#8D0E0E',
    padding: '10px 10px',
    color: 'white',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
    position: 'fixed',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    marginRight: '10px',
    paddingLeft: '35px',
  },
  logo: {
    width: '50px', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
  },
  titleContainer: {
    flex: 1,
    textAlign: 'left',
  },
  h1: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'normal',
  },
  h2: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 'normal',
    paddingLeft: '10px',
  },
  menuContainer: {
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative', // Ensure relative positioning for dropdown
  },
  menuIcon: {
    marginRight: '50px',
    cursor: 'pointer',
  },
  dropdownContainer: {
    position: 'absolute',
    marginRight: '70px',
    top: '100%',
    right: 0,
    zIndex: 1,
  },
  customDropdown: {
    backgroundColor: '#f0f0f0', // Gray background
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    width: '150px',
    display: 'flex',
    flexDirection: 'column',
  },
  dropdownItem: {
    padding: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #ccc',
    textAlign: 'center',
    color: 'black', // Text color is black
  },
};

export default Header;
