

import React from 'react';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import { render } from 'react-dom';
import {getAdDetail, deleteAd} from '../../api/ads';
import {Link, Redirect, Route} from 'react-router-dom'



const AdDetailedPage = ({history, ...props}) => {
    const [ad, setAd] = React.useState(null);
    const [error, setError] = React.useState(null)


    React.useEffect(() =>{

        getAdDetail(props.match.params.adId).then(ad => setAd(ad)).catch(error => setError(error.statusCode))
        
        
    },[]);

    if(error === 404){


        return <Redirect to='/404'/> 
    }

const handleDeleteButton = async () => {
    const confirmation= window.confirm("¿Seguro que deseas borrar el anuncio?")

    if(confirmation){
        await deleteAd(ad.id);
        history.push(`/`);
    } 
    
    

    
}

    return (
   

        <Layout title="Nodepop React">
        {ad && <div className= 'adsPage'>

<article key={ad.id} className = "adWrapperDetail">
    <h2  className = "adTitle">{ad.name}</h2>
   
    
    {ad.sale ? 
    <div className ="venta">
        <span className = "adPrice">Precio: {ad.price} €</span>
    </div> 
    : 
    <div className = "compra">
        <span className = "adPrice">Ofrezco máximo: {ad.price} €</span>

    </div>} 
    <Button
          as={Link}
          onClick={handleDeleteButton}
          variant="primary"
          className="header-button"
        >
          Borrar Anuncio
        </Button>
    <div>{ad.tags.map( tag => 
       <div key ={tag}className="tagItem">#{tag} </div>)}
    
    </div> 

    <img src= {`http://localhost:3001${ad.photo}`} />

    
    
</article>
    
    
    </div> }

    <Button
          as={Link}
          to="/"
          variant="primary"
          className="header-button"
        >
          Volver al listado
        </Button>
        </Layout>
    )

    }


export default AdDetailedPage;