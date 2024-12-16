const Advanced = ({ count, id, setCounters }) => {
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() =>
          setCounters((prev) =>
            prev.map((c) => (c.id === id ? { ...c, value: c.value + 1 } : c))
          )
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          setCounters((prev) =>
            prev.map((c) => (c.id === id ? { ...c, value: (c.value = 0) } : c))
          )
        }
      >
        RESET
      </button>
      <button
        onClick={() =>
          setCounters((prev) =>
            prev.map((c) => (c.id === id ? { ...c, value: c.value - 1 } : c))
          )
        }
      >
        Decrement
      </button>
    </div>
  );
};

export default Advanced;
