const Cart = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-8'>
      <h2 className='text-3xl font-bold mb-8'>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className='text-xl text-gray-600'>Your cart is empty!</p>
      ) : (
        <div className='bg-white w-full max-w-3xl shadow-lg rounded-lg p-6'>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className='flex items-cemter'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-16 h-16 object-contain mr-4'
                  />
                </div>
                <p className='text-lg font-semibold'>{item.title}</p>
                <p className='text-sm text-gray-600'>
                  {item.price} x {item.quantity}
                </p>

                <p className='text-lg font-bold mb-4'>
                  ${item.price * item.quantity}
                </p>
              </li>
            ))}
          </ul>

          <div className='flex justify-between items-center border-t border-gray-300 pt-4'>
            <p className='text-lg font-bold'>Total:</p>
            <p className='text-xl font-bold text-green-500'>
              ${calculateTotal()}
            </p>
          </div>
          <button onClick={() => alert('coming soon')}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
