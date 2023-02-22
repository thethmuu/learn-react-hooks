import { useState } from 'react';

function App() {
  // ounce
  const [water, setWater] = useState(8);
  // grams
  const [coffee, setCoffee] = useState(13);

  return (
    <div className='container mx-auto mt-36 flex justify-center items-center flex-col gap-4 font-semibold'>
      <h1 className='text-2xl font-semibold'>Coffee Machine</h1>
      <span className='text-[8rem]'>☕</span>
      <h2 className='text-xl'>Water: {water}</h2>
      <button className='btn btn-sm btn-primary'>Add</button>
      <h2 className='text-xl'>Coffee: {coffee}</h2>
      <button className='btn btn-sm btn-warning'>Add</button>
    </div>
  );
}

export default App;
