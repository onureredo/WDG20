import { useState } from 'react';
import useFetch from './hooks/useFetch';
import Form from './components/Form';

function App() {
  const [theme, setTheme] = useState(true);
  const [someState, setSomeState] = useState('HELLO');

  const { data, pending, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  return (
    <>
      {pending && <span className='loading loading-bars loading-lg'></span>}
      {error && (
        <div role='alert' className='alert alert-error'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 shrink-0 stroke-current'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>{error.message}</span>
        </div>
      )}
      {data && (
        <div data-theme={theme ? 'coffee' : 'dark'} className='card bg-base-100 w-96 shadow-xl'>
          <figure className='px-10 pt-10'>
            <img
              src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Quote</h2>
            <p>{data[0].title}</p>
            <div className='card-actions'>
              <button onClick={() => setTheme((t) => !t)} className='btn btn-primary'>
                Change Theme
              </button>
            </div>
          </div>
          <input type='text' name='' id='' value={someState} onChange={(e) => setSomeState(e.target.value)} />
        </div>
      )}

      <Form />
    </>
  );
}

export default App;
