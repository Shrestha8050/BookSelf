import React from 'react';
import Axios from 'axios';

const logout = (props) => {
  Axios.get(`/api/logout`).then((req) => {
    setTimeout(() => {
      props.history.push('/');
    }, 2000);
  });
  return (
    <div className='logout_container'>
      <h1>Sorrry To go</h1>
    </div>
  );
};

export default logout;
