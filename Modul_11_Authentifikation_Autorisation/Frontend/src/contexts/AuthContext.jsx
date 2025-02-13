import { createContext, useContext, useState } from 'react';
import { ToasterContext } from './ToasterContext';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { toaster } = useContext(ToasterContext);
  const navigate = useNavigate();

  const signup = async (formState) => {
    try {
      const res = await fetch(`http://localhost:8901/users/signup`, {
        method: 'POST',
        credentials: 'include',
        // withCredentials: true, // axios
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg);
      setUser(data.user);
      setIsAuthenticated(true);
      localStorage.setItem('token', data.token);
      toaster.success(`Welcome on Board, ${formState.firstName}!`);
      navigate('/books');
    } catch (error) {
      toaster.error(error.message);
    }
  };

  const login = async (formState) => {
    let success = false;
    try {
      const res = await fetch(`http://localhost:8901/users/login`, {
        method: 'POST',
        credentials: 'include',
        // withCredentials: true, // axios
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg);
      setUser(data.user);
      setIsAuthenticated(true);
      localStorage.setItem('token', data.token);
      toaster.success(`Welcome back, ${data.user.firstName}!`);
      navigate('/books');
      success = true;
    } catch (error) {
      toaster.error(error.message);
    }
    return success;
  };

  const logout = async () => {
    try {
      localStorage.removeItem('token');
      const res = await fetch('http://localhost:8901/users/logout', {
        method: 'POST',
        credentials: 'include',
      });
      if (!res.ok) throw new Error('Logout failed');
      setUser(null);
      setIsAuthenticated(false);
      toaster.success(`Logged out`);
      navigate('/');
    } catch (error) {
      toaster.error(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ signup, user, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
