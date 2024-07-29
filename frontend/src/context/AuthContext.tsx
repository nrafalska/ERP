import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define types for User and AuthContext
interface User {
  email: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Create context with an initial value of undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component that wraps the application's components
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      // Example login logic. Replace with real authentication logic
      setCurrentUser({ email });
      localStorage.setItem('user', JSON.stringify({ email })); // Save user to local storage
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Login failed');
    }
  };

  const logout = (): void => {
    setCurrentUser(null);
    localStorage.removeItem('user'); // Remove user from local storage
  };

  useEffect(() => {
    // Initialize current user from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
