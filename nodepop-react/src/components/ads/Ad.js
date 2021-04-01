
import './AdsPage.css';

import React from 'react';

import Button from '../../components/shared/Button'


const Ad = ({adsList, history}) =>{


    const items = adsList.map(ad =>  
        
        <article key={ad.id} className = "adWrapper">
            <h2  className = "adTitle">{ad.name}</h2>
           
            
            {ad.sale ? 
            <div className ="venta">
                <span className = "adPrice">Precio: {ad.price} €</span>
            </div> 
            : 
            <div className = "compra">
                <span className = "adPrice">Ofrezco máximo: {ad.price} €</span>

            </div>} 
            <div>{ad.tags.map( tag => 
               <div key ={tag}className="tagItem">#{tag} </div>)}
            
            </div> 
            <Button  className= "detailedButton" onClick={event => handleClick(ad.id)}>Ver detalle</Button>
        </article>
        );



    const handleClick = (id) => {
        history.push(`/ad/${id}`)
        
    };
   

    return <div className= 'adsPage'>{items}</div> 


}

export default Ad;