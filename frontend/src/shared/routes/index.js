import { Routes, Route, Navigate } from 'react-router-dom';

import {
  Welcome,
  SignUp,
  SignIn,
  Forgot,
  Reset,
  Home,
  Travels,
  TravelsDetails,
  FindTravels,
  Asas,
  AsasDetails,
  Profile,
} from '../../pages';

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

        <Route
          path="/asas"
          element={
            <Layout>
              <Asas />
            </Layout>
          }
        />

        <Route
          path="/asas/details/:id"
          element={
            <Layout>
              <AsasDetails />
            </Layout>
          }
        />

        <Route
          path="/travels"
          element={
            <Layout>
              <Travels />
            </Layout>
          }
        />

        <Route
          path="/travels/details/:id"
          element={
            <Layout>
              <TravelsDetails />
            </Layout>
          }
        />

        <Route
          path="/find-travels"
          element={
            <Layout>
              <FindTravels />
            </Layout>
          }
        />

        <Route
          path="/profiles"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Routes>
  );
};
