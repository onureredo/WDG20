import { useEffect, useState } from 'react';

function Effect() {
  const [name, setName] = useState('');
  const [error, setError] = useState('error');

  // every single useEffect always fire on first render
  // on first render
  useEffect(() => {
    console.log('the component has been mounted');
  }, []);

  // on every render
  useEffect(() => {
    console.log('every render');
  });

  // depends on state
  useEffect(() => {
    console.log('name state has changed');
  }, [name]);

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='type something'
      />
    </div>
  );
}

export default Effect;
