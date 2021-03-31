import './AdsPage.css';
import {getAds} from '../../api/ads'
import React from 'react';
import Button from '../shared/Button';
import Layout from '../layout/Layout';



const AdsPage = (props)=>{

    //1. Primero seteamos el estado de nuestro componente a un array vacío para que se renderice el DOM 

    const [ads, setAds] = React.useState([]);

    const handleClick = () => alert("Construyendo el enlace al detalle");

      // 2. Para tener actualizado el estado de mi componente, utilizo el hook useEffect para que se ejecute justo después de que se monte el DOM. El useEffect actualiza el estado de mi componente con lo que me llega como respuesta de la peticion al servidor. Al cambiar el estado se va a forzar un nuevo render. El useEffect suele utilizarse para meter ahí el código que no tiene que ver con el render
      React.useEffect(()=>{

        getAds().then(ads => {

         setAds(ads)
         });
    }, []);

    

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
        <Layout title="Nodepop React" {...props}>
            <div  className= 'adsPage'>{items}</div>
        </Layout>
           
        

        
        
    )
}

export default AdsPage;