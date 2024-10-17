import React from 'react';
import './Header.css';

interface HeaderProps {
    centerItem?: React.ReactNode;
    rightItem?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ centerItem, rightItem }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>LogoName</h1>
      </div>
      <div className="header-center">
        {centerItem}
      </div>
      <div className="header-right">
        {rightItem} 
      </div>
    </header>
  );
};

export default Header;