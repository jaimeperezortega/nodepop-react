import React from 'react';
import classNames from 'classnames';
import {ReactComponent as Icon} from '../../assets/nodepop.svg';
import Button from '../shared/Button';
import './Header.css';

const Header = ({ className, ...props }) => {
  return (
    <header className={classNames('header', className)} {...props}>
      
        <div className="header-logo">
          <Icon width="32" height="32"/>
        </div>
      
      <nav className="header-nav">
        <Button
          
          variant="primary"
          className="header-button"
        >
          Tweet
        </Button>
       
      </nav>
    </header>
  );
};

export default Header;
