import React from 'react';

const Button = ({ type, children, className, ...props }) => {
  return (
    <button
      type={type}
      className={`w-full bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
