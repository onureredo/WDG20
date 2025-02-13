import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import VisitorMenu from './VisitorMenu';

const Navbar = () => {
  return (
    <header className='navbar bg-base-100 shadow-sm'>
      <div className='flex-1'>
        <Link to={'/'} className='btn btn-ghost text-xl'>
          PersonalLibrary
        </Link>
      </div>
      <div className='flex gap-2'>
        <VisitorMenu />
        <UserMenu />
      </div>
    </header>
  );
};

export default Navbar;
