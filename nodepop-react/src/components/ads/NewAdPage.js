

import React from 'react';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import { Redirect, Route } from 'react-router-dom';
import NewAdForm from './NewAdForm';
import NewAdFormWithCustomHook from './NewAdFormCustomHook';
import { publishAd } from '../../api/publishAd';



const NewAdPage = ({isLogged, onLogout, history})=>{

    const handleSubmit = async  (formValues, sale, adImage) =>{
      
       
       const{name, price, tags} = formValues
       

       let formData = new FormData();
      


       
           if (adImage) {
               formData.append("name", name);
               formData.append("price", price);
               formData.append("tags", tags);
               formData.append("photo", adImage );
               formData.append("sale", sale );
               await publishAd(formData);
               history.push('/');

               
           } else {
                formData.append("name", name);
                formData.append("price", price);
                formData.append("tags", tags);
                formData.append("sale", sale );
                await publishAd(formData);
                history.push('/');

             

           }

      
      }


    if (isLogged) {

        return(

       
            <Layout onLogout={onLogout} isLogged={isLogged} title="Nodepop React">
                <h1>PUBLICAR ANUNCIO</h1>
                <NewAdFormWithCustomHook onSubmit = {handleSubmit}/>
            </Layout>
            
        )

    } else {
        return (
            <Redirect to ='/login'/>
        )
    }
    
    
}

export default NewAdPage;