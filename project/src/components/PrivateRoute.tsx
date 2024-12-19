import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: React.ReactNode;
  token: string | null;
  redirectPath: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, token, redirectPath }) => {
  if (!token) {
    return <Navigate to={redirectPath} />;
  }
  return <>{element}</>;
};

export default PrivateRoute;
