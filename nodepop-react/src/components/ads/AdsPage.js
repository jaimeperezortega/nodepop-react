import './AdsPage.css';
import {getAds} from '../../api/ads'
import React from 'react';


const AdsPage = ()=>{

    //1. Primero seteamos el estado de nuestro componente a un array vacío para que se renderice el DOM 

    const [ads, setAds] = React.useState([]);

    const items = ads.map(ad => 
        
        <article key={ad.id} className = "adWrapper">
            <h2 className = "adTitle">{ad.name}</h2>
            
            {ad.sale ? 
            <div className ="venta">
                <span className = "adPrice">Precio: {ad.price} €</span>
            </div> 
            : 
            <div className = "compra">
                <span className = "adPrice">Ofrezco máximo: {ad.price} €</span>

            </div>} 
            <div>{ad.tags.map(tag => 
               <div className="tagItem">#{tag} </div>)}
            
            </div> 
        </article>
        );


        // 2. Para tener actualizado el estado de mi componente, utilizo el hook useEffect para que se ejecute justo después de que se monte el DOM. El useEffect actualiza el estado de mi componente con lo que me llega como respuesta de la peticion al servidor. Al cambiar el estado se va a forzar un nuevo render
        React.useEffect(()=>{
            getAds().then(response => setAds(response.data));
        })
    
    return(
        <div>
            <div className= 'adsPage'>{items}</div>
        </div>

        
        
    )
}

export default AdsPage;