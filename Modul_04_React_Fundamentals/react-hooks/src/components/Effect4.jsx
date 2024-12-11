import { useState, useEffect } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';
import axios from 'axios';

function Effect4() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Async Await with Axios</h2>
      {loading ? (
        <SpinnerCircularFixed
          size={50}
          thickness={100}
          speed={100}
          color='#36ad47'
          secondaryColor='rgba(0, 0, 0, 0.44)'
        />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>
              <h3>{todo.title}</h3>
              <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Effect4;
