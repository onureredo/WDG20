import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='store'>STORE</NavLink>
        </li>
        <li>
          <NavLink to='about'>ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to='cart'>
            🛒SHOPPING CART
            {totalQuantity > 0 && (
              <span className='bg-red-500 text-white rounded-full mx-2 px-2 py-1'>
                {totalQuantity}
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
