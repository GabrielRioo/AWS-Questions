import React from 'react';
import './Button.css';

interface Button {
    text: string;
    onClick: () => void;
    size?: 'small' | 'large';
}

const Button: React.FC<Button> = ({text, onClick, size = 'large'}) => {
  return (
    <div>
        <button onClick={onClick} className={`button-${size}`}>
            {text}
        </button>
    </div>
  );
};

export default Button;