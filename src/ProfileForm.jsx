import React, { useReducer } from 'react';

function profileReducer(state, action) {
  switch (action.type) {
    case 'update-username':
      return { ...state, username: action.payload };
    case 'update-age':
      return { ...state, age: action.payload };
  }
}

const ProfileForm = () => {
  const [profile, dispatch] = useReducer(profileReducer, {
    username: 'Dave',
    age: 22,
  });

  function handleSubmit() {
    console.log('submit');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            defaultValue={profile.username}
            onChange={(e) =>
              dispatch({ type: 'update-username', payload: e.target.value })
            }
            type='text'
            id='username'
          />
        </div>
        <div>
          <label htmlFor='age'>age</label>
          <input
            defaultValue={profile.age}
            onChange={(e) =>
              dispatch({ type: 'update-age', payload: e.target.value })
            }
            type='number'
            id='age'
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
