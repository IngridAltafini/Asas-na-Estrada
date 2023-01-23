import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';
import { DrawerProvider } from './DrawerContext';

export const AppProvider = ({ children }) => (
  <AuthProvider>
    <DrawerProvider>
      <ToastProvider>{children}</ToastProvider>
    </DrawerProvider>
  </AuthProvider>
);
