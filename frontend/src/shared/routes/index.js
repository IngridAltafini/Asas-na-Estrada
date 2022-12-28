import { Routes, Route, Navigate } from 'react-router-dom';

import { Welcome, SignUp, SignIn, Forgot, Reset, Home } from '../../pages';

import { PrivateRoutes } from './PrivateRoutes';

import { Layout } from '../components';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />

      <Route path="/sign-up" element={<SignUp />} />

      <Route path="/sign-in" element={<SignIn />} />

      <Route path="/forgot" element={<Forgot />} />

      <Route path="/reset" element={<Reset />} />

      <Route element={<PrivateRoutes />}>
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Routes>
  );
};
