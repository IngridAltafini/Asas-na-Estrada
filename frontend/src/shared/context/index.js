import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';

export const AppProvider = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);
