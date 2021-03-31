import React from 'react';
import classNames from 'classnames';
import {ReactComponent as Icon} from '../../assets/nodepop.svg';
import Button from '../shared/Button';
import './Header.css';

const Header = ({ className, isLogged, ...props }) => {
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
      {/*Aquí en el Header vamos a necesitar poder acceder al estado de App.js porque si está loggeado, este componente va a mostrar el botón de LogOut, sin embargo, si no está loggeado va a mostrar el botón de Log In. Para ello, vamos a necesitar poder pasar esta información desde App.js hasta Header.js a través de las props */}

      {isLogged ? (
        <Button className="header-button">Logout</Button>
    
      ) : (
        <Button className="header-button">Login</Button>
      )
       }

       
      </nav>
    </header>
  );
};

export default Header;
