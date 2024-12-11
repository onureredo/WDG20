import { useState, useEffect } from 'react';

function Effect3() {
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advices');
      //   console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
      }
      const result = await response.json();
      //   console.log(result);
      setData(result.slip);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Random Advice</h2>
      <p>{data.advice}</p>
      <button onClick={fetchData}>GIVE ME ANOTHER ADVICE</button>
    </div>
  );
}

export default Effect3;
