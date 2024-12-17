import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setTimeout(() => {
      navigate('welcome');
    }, 2000);
  };

  const handleLogout = () => {
    navigate('goodbye');
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='about'>ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to='dashboard'>DASHBOARD</NavLink>
        </li>
        <li>
          <NavLink to='dashboard/profil'>PROFIL</NavLink>
        </li>
        <li>
          <NavLink to='dashboard/settings'>SETTINGS</NavLink>
        </li>
        <li>
          <NavLink to='products'>STORE</NavLink>
        </li>
        <button onClick={handleLogin}>LOGIN</button>
        <button onClick={handleLogout}>LOGOUT</button>
      </ul>
    </nav>
  );
};

export default Navbar;
