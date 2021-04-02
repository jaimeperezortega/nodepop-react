
import React from 'react';
import Layout from '../layout/Layout';
import Button from './Button';
import {Link} from 'react-router-dom'


const PageNotFound = () =>{
    return(
        <div>

            
            <h1> 404 | Página no encontrada</h1>
            

            
            <Button
          as={Link}
          to="/"
          variant="primary"
          className="header-button"
        >
          Volver al listado
        </Button>

        </div>
        
    )
}

export default PageNotFound;