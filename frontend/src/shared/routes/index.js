import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContextProvider } from '../../context/AuthContext';

import { Welcome, SignUp, SignIn, Forgot, Reset } from '../../pages';

import { Layout } from '../components';

export const AppRoutes = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/forgot" element={<Forgot />} />

        <Route path="/reset" element={<Reset />} />

        <Route path="/layout" element={<Layout />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthContextProvider>
  );
};
