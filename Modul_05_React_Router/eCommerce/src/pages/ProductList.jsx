import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SpinnerCircular } from 'spinners-react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      //   console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='container mx-auto px-12 flex flex-wrap gap-6 min-h-screen'>
      {loading ? (
        <div className='flex items-center justify-center w-full'>
          <SpinnerCircular
            size={50}
            thickness={100}
            speed={100}
            color='#ffd700'
            secondaryColor='rgba(0, 0, 0, 0.44)'
          />
        </div>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className='border border-gray-300 rounded-lg p-4 w-80 shadow-md hover:shadow-lg'
          >
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-48 mb-4 cursor-pointer object-contain'
              />
            </Link>
            <h2 className='text-lg font-semibold mb-2 text-center'>
              {product.title}
            </h2>
            <p className='text-sm text-gray-600 mb-4'>
              {product.description.slice(0, 80)}...
              <Link
                to={`/products/${product.id}`}
                className='text-blue-500 hover:text-blue-400'
              >
                ...more
              </Link>
            </p>
            <p className='text-sm mb-4'>
              Rating: {product.rating.rate} / 5{product.rating.count} reviews
            </p>
            <p>Price: ${product.price}</p>
            <button className='bg-gray-800 text-white px-4 py-2 rounded hover:bg-yellow-500'>
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
