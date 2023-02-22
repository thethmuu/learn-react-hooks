import React, { useRef } from 'react';

// useRef -> access a DOM node directly
// function myUseRef() {
//   const [value] = useState({ current: '' });

//   return value;
// }

const Form = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  function handleSubmit() {
    console.log(usernameRef.current.value, passwordRef.current.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input ref={usernameRef} type='text' id='username' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input ref={passwordRef} type='text' id='password' />
        </div>
      </form>
    </div>
  );
};

export default Form;
