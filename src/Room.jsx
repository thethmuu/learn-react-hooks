import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action) {
    case 'on':
      return true;
    case 'off':
      return false;
    default:
      return state;
  }
}

const Room = () => {
  const [isswitchOn, dispatch] = useReducer(reducer, true);
  return (
    <div className={`w-100 h-screen ${isswitchOn ? 'bg-white' : 'bg-black'}`}>
      <div className='container mx-auto flex justify-center items-center flex-col gap-4 font-semibold'>
        <h1 className='text-2xl font-semibold'>Light Switch</h1>
        <div className='flex gap-2'>
          <button
            className='btn btn-sm btn-primary'
            onClick={() => dispatch('on')}
          >
            On
          </button>
          <button
            className='btn btn-sm btn-warning'
            onClick={() => dispatch('off')}
          >
            Off
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;
