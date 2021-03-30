
import {getAdDetail} from '../../api/ads'
import React from 'react';
import Button from '../shared/Button';
import Layout from '../layout/Layout';



const AdDetailedPage = (ad)=>{


    const items = ads.map(ad =>  //Modelizo los datos aue voy a recibir de la API para pintarlos en el formato que deseo
        
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
            <Button className= "detailedButton" onClick={handleClick}>Ver detalle</Button>
        </article>
        );

    
    return(
        <Layout title="Nodepop React">
            <div  className= 'adsPage'>{items}</div>
        </Layout>
           
        

        
        
    )
}

export default AdsPage;