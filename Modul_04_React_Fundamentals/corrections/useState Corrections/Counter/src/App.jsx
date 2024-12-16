import { useState } from 'react';
import Counter from './components/Counter';
import Advanced from './components/Advanced';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // ADVANCED
  // const [counters, setCounters] = useState([
  //   { id: 1, value: 0 },
  //   { id: 2, value: 0 },
  //   { id: 3, value: 0 },
  // ]);

  return (
    <>
      <h2>BASIC</h2>
      <Counter count={count1} setCount={setCount1} />
      <Counter count={count2} setCount={setCount2} />
      <Counter count={count3} setCount={setCount3} />

      {/*
      <h2>ADVANCED</h2>
      ADVANCED 
      {/* {counters.map((counter) => (
        <Advanced
          key={counter.id}
          id={counter.id}
          count={counter.value}
          setCounters={setCounters}
        />
      ))} */}
    </>
  );
}

export default App;
