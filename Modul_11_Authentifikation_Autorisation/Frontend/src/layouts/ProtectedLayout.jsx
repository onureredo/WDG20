import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedLayout = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate('/signup');
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;
  return <Outlet />;
};

export default ProtectedLayout;
