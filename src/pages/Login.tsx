
import React from 'react';
import LiraLogo from '../components/LiraLogo';
import LoginForm from '../components/LoginForm';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="music-bg min-h-screen flex items-center justify-center">
      <div className="auth-container">
        <LiraLogo />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
