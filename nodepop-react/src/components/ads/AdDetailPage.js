

import React from 'react';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import { render } from 'react-dom';
import {getAdDetail} from '../../api/ads'



const AdDetailedPage = (props) => {
    const [ad, setAd] = React.useState(null)


    React.useEffect(() =>{

        getAdDetail(props.match.params.adId).then(ad => setAd(ad))
        
        
    },[]);

    

    return (
        <Layout title="Nodepop React">
        <div className= 'adsPage'>

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
            
        </article>
            
            
            </div> 
        </Layout>
    )

    }


export default AdDetailedPage;