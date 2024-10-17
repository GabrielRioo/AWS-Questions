import React from 'react';
import './Button.css';

interface Button {
    text: string;
    onClick: () => void;
}

const Button: React.FC<Button> = ({text, onClick}) => {
  return (
    <div>
        <button onClick={onClick} className='button'>
            {text}
        </button>
    </div>
  );
};

export default Button;