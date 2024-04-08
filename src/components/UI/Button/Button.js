
import React from 'react';
import './Button.css';

const Button = (props) => {
  const { type, onClick, children, isInvalid } = props;

  // Determine the class names based on the isInvalid prop
  const buttonClassName = `button ${isInvalid ? 'invalid' : ''}`;

  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
