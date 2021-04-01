import './AdsPage.css';
import {getAds} from '../../api/ads'
import React from 'react';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import Ad from './Ad'



const EmptyList = () => (

    <div style={{textAlign: 'center'}}>
        <h2>No hay anuncios publicados</h2>
        <p>¡Puedes ser el primero! </p>
        <Button variant="primary">
            Publicar Anuncio
        </Button>

    </div>

);




const AdsPage = (props)=>{

    //1. Primero seteamos el estado de nuestro componente a un array vacío para que se renderice el DOM 

    const [ads, setAds] = React.useState([]);

    

      // 2. Para tener actualizado el estado de mi componente, utilizo el hook useEffect para que se ejecute justo después de que se monte el DOM. El useEffect actualiza el estado de mi componente con lo que me llega como respuesta de la peticion al servidor. Al cambiar el estado se va a forzar un nuevo render. El useEffect suele utilizarse para meter ahí el código que no tiene que ver con el render
      React.useEffect(()=>{

        getAds().then(ads => {

         setAds(ads)
         });
    }, []);


    
    return(
        <Layout title="Nodepop React" {...props}>
            {ads.length ? 
            <Ad {...props} adsList = {ads}/>
            : <EmptyList/>}
        </Layout>
           
    
        
    )
}

export default AdsPage;