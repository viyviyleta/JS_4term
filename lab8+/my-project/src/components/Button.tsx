import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  let colorClass = label === "Decrement (–)" ? "gray" : label === "Increment (+)" ? "green" : "red"
  
  return (
    <button 
      onClick={onClick} 
      className={`text-white cursor-pointer hover:bg-${colorClass}-600 px-4 py-2 rounded focus:outline-none bg-${colorClass}-500 transition-all duration-300`}
    >
      {label}
    </button>
  );
};

export default Button;