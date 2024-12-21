import { useCart } from '../context/CartContext';

const Cart2 = () => {
  const { cartItems, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className='min-h-screen flex flex-col items-center p-8'>
      <h1 className='text-3xl font-bold mb-8'>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className='text-xl text-gray-600'>Your cart is empty!</p>
      ) : (
        <div className='bg-white w-full max-w-3xl shadow-lg rounded-lg p-6'>
          <ul className='divide-y divide-gray-200 mb-6'>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className='flex items-center justify-between py-4'
              >
                <div className='flex items-center'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-16 h-16 object-contain mr-4'
                  />
                  <div>
                    <p className='text-lg font-semibold'>{item.title}</p>
                    <p className='text-sm text-gray-600'>
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <button
                    className='bg-gray-300 text-gray-800 px-2 py-1 rounded mr-2 hover:bg-gray-400'
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <button
                    className='bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400'
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                  <p className='text-lg font-bold mx-4'>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className='flex justify-between items-center border-t border-gray-300 pt-4'>
            <p className='text-lg font-bold'>Total:</p>
            <p className='text-xl font-bold text-green-600'>
              ${calculateTotal()}
            </p>
          </div>

          <button
            onClick={() => alert('coming soon')}
            className='w-full bg-gray-800 text-white py-3 rounded-lg mt-6 hover:bg-yellow-500 transition-colors'
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart2;
