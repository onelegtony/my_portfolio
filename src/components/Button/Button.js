import React from 'react';

import './Button.css';

const Button = ({ type, value }) => {
  return (
    <button type={type} className='regular-btn'>
      {value}
    </button>
  );
};

export default Button;
