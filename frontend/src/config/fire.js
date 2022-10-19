import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from '../shared/environment';

const firebaseConfig = {
  apiKey: environment.FIRE_API_KEY,
  authDomain: environment.FIRE_AUTH_DOMAIN,
  projectId: environment.FIRE_PROJECT_ID,
  storageBucket: environment.FIRE_STORAGE_BUCKET,
  messagingSenderId: environment.FIRE_MESSAGING_SENDER_ID,
  appId: environment.FIRE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
