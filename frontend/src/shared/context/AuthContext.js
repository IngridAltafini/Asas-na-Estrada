import {
  useState,
  useCallback,
  createContext,
  useContext,
  useEffect,
} from 'react';

import { login } from '../../api/Api';

import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
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

  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async result => {
      console.log('result ', result);
    });
  };

  const FacebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider).then(async result => {
      console.log('result', result);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setData(currentUser);
      console.log('User', currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ GoogleSignIn, FacebookSignIn, signIn, signOut, payload: data }}
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
