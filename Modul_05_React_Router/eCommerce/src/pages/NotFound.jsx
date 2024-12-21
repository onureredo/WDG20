import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h2 className='text-5xl'>404 NOT FOUND</h2>
        <p className='text-2xl my-4'>
          The Page you are looking for does not exist
        </p>
        <Link
          to='/'
          className='text-white font-bold bg-yellow-400 p-4 my-4 rounded-lg hover:bg-yellow-300'
        >
          BACK TO HOME
        </Link>
      </div>
    </>
  );
};

export default NotFound;
