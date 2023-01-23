import { useState, useCallback, createContext, useContext } from 'react';

import { login, loginSocial } from '../../api/Api';

import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';

import { auth } from '../../config/fire';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const usersData = JSON.parse(localStorage.getItem('@Asas'));

    if (usersData) {
      return {
        token: usersData.token,
        user: usersData.user,
      };
    }

    return undefined;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await login({ email, password });

    const { token, user } = response;

    setData(user);

    localStorage.setItem('@Asas', JSON.stringify({ token, user }));
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Asas');
    setData(undefined);
  }, []);

  const googleSignIn = useCallback(async () => {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider).then(async result => {
      const { user: userGoogle, providerId } = result;

      const response = await loginSocial({
        email: userGoogle.email,
        name: userGoogle.displayName,
        provider_id: providerId,
      });
      console.log(response);

      const { token, user } = response;

      setData(user);

      localStorage.setItem('@Asas', JSON.stringify({ token, user }));
    });
  }, []);

  const facebookSignIn = useCallback(async () => {
    const provider = new FacebookAuthProvider();

    return signInWithPopup(auth, provider).then(async result => {
      const { user: userFacebook, providerId } = result;

      const response = await loginSocial({
        email: userFacebook.email,
        name: userFacebook.displayName,
        provider_id: providerId,
      });
      console.log(response);

      const { token, user } = response;

      setData(user);

      localStorage.setItem('@Asas', JSON.stringify({ token, user }));
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        facebookSignIn,
        signIn,
        signOut,

        payload: data,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
