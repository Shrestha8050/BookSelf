import React from 'react';

const index = (props) => {
  let userData = props.user.login;

  if (userData) {
    return (
      <div className='user_container'>
        <div className='avatar'>
          <img src='/images/avatar.png' alt='avatar' />
        </div>
        <div className='nfo'>
          <div>
            <span>Name:</span>
            {userData.name}
          </div>
          <div>
            <span>Lastname:</span>
            {userData.lastname}
          </div>
          <div>
            <span>Email:</span>
            {userData.email}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default index;
