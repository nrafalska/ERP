import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  currentUser: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  const login = async (email: string, password: string) => {
    // Пример входа. Замените на реальную логику входа
    setCurrentUser({ email });
    localStorage.setItem('user', JSON.stringify({ email })); // Сохранение пользователя в локальном хранилище
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user'); // Удаление пользователя из локального хранилища
  };

  useEffect(() => {
    // Инициализация текущего пользователя из локального хранилища
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
