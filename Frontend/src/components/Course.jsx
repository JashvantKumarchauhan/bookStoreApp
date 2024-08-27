import React from 'react';
import list from '../../public/list.json'; // Ensure correct path and JSON import
import Cards from './Cards';
import { Link } from 'react-router-dom';

export default function Course() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl pb-2 md:text-4xl'>
          We're delighted to have you <span className='text-pink-500'>Here! :)</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit non nam
          facere qui mollitia dolorem voluptate explicabo dolorum vitae magnam odio, 
          nostrum culpa quasi assumenda minima beatae, nihil error!
        </p>
        <Link to='/'>
          <button className='mt-6 px-4 py-2 text-white bg-pink-500 hover:bg-pink-700 duration-300 rounded-md'>
            Back
          </button> 
        </Link>
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
        {list.length > 0 ? (
          list.map(item => (
            <Cards key={item.id} item={item} />
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </div>
  );
}