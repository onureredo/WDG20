import { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=150'
      );
      console.log(response.data);
      setData(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      {loading ? (
        <p>Loading Pokemons...</p>
      ) : (
        <ol>
          {data.map((pokemon, index) => (
            <li key={index}>
              <p>{pokemon.name}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default PokemonList;
