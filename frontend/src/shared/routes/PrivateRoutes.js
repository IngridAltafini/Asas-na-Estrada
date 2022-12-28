import { Outlet, Navigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

export const PrivateRoutes = () => {
  const { payload } = useAuth();

  return payload ? <Outlet /> : <Navigate to="/" />;
};
