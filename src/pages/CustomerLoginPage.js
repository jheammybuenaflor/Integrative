import React, { useState } from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5'; // Importing an office head icon from react-icons

const CustomerLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <IoPersonCircleSharp size={67} style={{ ...styles.icon, color: '#8D0E0E' }} /> {/* Icon color */}
        <div style={styles.title}>CUSTOMER</div>
      </div>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>Username </label> {/* Added space after "Username" */}
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ ...styles.input, marginLeft: '30px' }}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password </label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ ...styles.input, marginLeft: '30px' }}
            />
            <button type="button" onClick={togglePasswordVisibility} style={styles.toggleButton}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
      </form>
      <button type="submit" style={styles.loginButton}>Proceed</button> {/* Proceed button outside the form */}
      <button type="button" style={styles.backButton} onClick={() => alert('Back button clicked')}>Back</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 100px)', // Adjust as per your header/footer height
    padding: '20px',
    backgroundColor: '#f0f0f0', // Light gray background
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  icon: {
    marginBottom: '10px',
  },
  title: {
    fontSize: '30px',
  },
  form: {
    backgroundColor: 'lightgray',
    padding: '20px',
    borderRadius: '18px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '450px',
    marginBottom: '30px',
    border: '1px solid #1d1d1d',
  },
  label: {
    fontSize: '20px', // Font size adjustment for labels
    marginLeft: '10px'
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'right',
    marginBottom: '15px',
  },
  input: {
    flex: 1,
    padding: '10px',
    marginTop: '5px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    alignItems: 'left',
  },
  passwordContainer: {
    display: 'flex',
    alignItems: 'right',
  },
  toggleButton: {
    marginLeft: '10px',
    padding: '8px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  loginButton: {
    width: '40%',
    padding: '10px',
    backgroundColor: '#8D0E0E', // Red background
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    marginBottom: '10px',
    fontSize: '18px',
  },
  backButton: {
    color: 'black', // Blue text color
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
  },
};

export default CustomerLoginPage;
