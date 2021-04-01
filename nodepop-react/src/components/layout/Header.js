import React from 'react';
import classNames from 'classnames';
import {ReactComponent as Icon} from '../../assets/nodepop.svg';
import Button from '../shared/Button';
import './Header.css';
import {logout} from '../../api/auth.js'
import {Link} from 'react-router-dom';

const Header = ({ className, isLogged, onLogout }) => {

  const logOutFunc = () =>{
    onLogout()
    logout();
  }

  return (
    <header className={classNames('header', className)} >
      
      <Link to='/'>

      <div className="header-logo">
          <Icon width="32" height="32"/>
        </div>
      
      </Link>
       
      
      <nav className="header-nav">
        
        <Button
          as={Link}
          to="/new-ad"
          variant="primary"
          className="header-button"
        >
          Publicar Anuncio
        </Button>
      {/*Aquí en el Header vamos a necesitar poder acceder al estado de App.js porque si está loggeado, este componente va a mostrar el botón de LogOut, sin embargo, si no está loggeado va a mostrar el botón de Log In. Para ello, vamos a necesitar poder pasar esta información desde App.js hasta Header.js a través de las props */}

      {isLogged ? (
        <Link to="/login">
          <Button className="header-button" onClick={logOutFunc}>Logout</Button>
        </Link>
        
    
      ) : (
        <Link to="/login">
          <Button className="header-button">Login</Button>
        </Link>
        
      )
       }

       
      </nav>
    </header>
  );
};

export default Header;
