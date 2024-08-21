import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('authDitaproToken') || null);

  useEffect(() => {
    // Listen to changes in localStorage to update token state
    const handleStorageChange = () => {
      const newToken = localStorage.getItem('authDitaproToken');
      setToken(newToken);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('authDitaproToken', token);
    } else {
      localStorage.removeItem('authDitaproToken');
    }
  }, [token]);

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
