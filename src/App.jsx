import { useState } from 'react';

function useCoffeeMachine() {
  const [brew, setBrew] = useState({
    water: 8,
    coffee: 13,
  });

  function setWater() {
    setBrew({
      ...brew,
      water: brew.water + 1,
    });
  }

  function setCoffee() {
    setBrew((preBrew) => {
      return {
        ...preBrew,
        coffee: brew.coffee + 1,
      };
    });
  }

  return {
    water: brew.water,
    coffee: brew.coffee,
    setWater,
    setCoffee,
  };
}
// App
//  useCoffeeMachine
//    useState
function App() {
  // custom hook
  const { water, coffee, setWater, setCoffee } = useCoffeeMachine();

  return (
    <div className='container mx-auto mt-36 flex justify-center items-center flex-col gap-4 font-semibold'>
      <h1 className='text-2xl font-semibold'>Coffee Machine</h1>
      <span className='text-[8rem]'>☕</span>
      <h2 className='text-xl'>Water: {water}</h2>
      <button className='btn btn-sm btn-primary' onClick={setWater}>
        Add
      </button>
      <h2 className='text-xl'>Coffee: {coffee}</h2>
      <button className='btn btn-sm btn-warning' onClick={setCoffee}>
        Add
      </button>
    </div>
  );
}

export default App;
