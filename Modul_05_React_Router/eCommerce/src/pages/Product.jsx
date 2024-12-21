import { useState, useEffect } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        // console.log(response);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productId]);

  return (
    <div className='flex items-center justify-center min-h-screen p-4'>
      {loading ? (
        <SpinnerCircular
          size={50}
          thickness={100}
          speed={100}
          color='#ffd700'
          secondaryColor='rgba(0, 0, 0, 0.44)'
        />
      ) : product ? (
        <div className='max-w-3xl border border-gray-300 rounded-lg p-6 shadow-lg'>
          <h2 className='text-2xl font-bold mb-4'>{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            className='w-full h-80 object-contain mb-6'
          />
          <p className='text-sm text-gray-600 mb-4'>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button className='bg-gray-800 text-white px-4 py-2 rounded hover:bg-yellow-500'>
            Add to Cart
          </button>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Product;
