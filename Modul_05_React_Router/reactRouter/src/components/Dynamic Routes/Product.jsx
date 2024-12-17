import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} width='25%' />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button>BUY</button>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Product;
