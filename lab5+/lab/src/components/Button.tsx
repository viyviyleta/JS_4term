import React from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ title, onClick, disabled }) => {
  return (
    <button className={`btn ${disabled ? "disabled" : ""}`} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
