import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user) return <>{children}</>;
  else return <Navigate to="/" />;
};

export default ProtectedRoute;
