import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import AdminLoginPage from './pages/AdminLoginPage';
import CustomerLoginPage from './pages/CustomerLoginPage';
import OfficeHeadLoginPage from './pages/OfficeHeadLoginPage';

const App = () => {
  return (
    <div>
      <Header />
      <Login />
      <AdminLoginPage />
      <CustomerLoginPage />
      <OfficeHeadLoginPage />
      <Footer />
    </div>
    
  );
};

export default App;
