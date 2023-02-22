import { useState } from 'react';

function App() {
  const [brew, setBrew] = useState({
    water: 8,
    coffee: 13,
  });

  function setWater() {
    // setBrew({
    //   ...brew,
    //   water: brew.water + 1,
    // });
  }

  function setCoffee() {
    setBrew((preBrew) => {
      return {
        ...preBrew,
        coffee: brew.coffee + 1,
      };
    });
  }

  return (
    <div className='container mx-auto mt-36 flex justify-center items-center flex-col gap-4 font-semibold'>
      <h1 className='text-2xl font-semibold'>Coffee Machine</h1>
      <span className='text-[8rem]'>☕</span>
      <h2 className='text-xl'>Water: {brew.water}</h2>
      <button className='btn btn-sm btn-primary' onClick={setWater}>
        Add
      </button>
      <h2 className='text-xl'>Coffee: {brew.coffee}</h2>
      <button className='btn btn-sm btn-warning' onClick={setCoffee}>
        Add
      </button>
    </div>
  );
}

export default App;
