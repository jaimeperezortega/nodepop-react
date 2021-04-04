

import React from 'react';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import { Redirect } from 'react-router-dom';
import NewAdForm from './NewAdForm';
import NewAdFormWithCustomHook from './NewAdFormCustomHook';



const NewAdPage = ({isLogged})=>{

    const handleSubmit =  (formValues, onSale) =>{
      
        
        if(onSale === "sell") {
            const newFormValues = {
                ...formValues,
                onSale: true,
            }
            console.log(newFormValues);
            return newFormValues
        }

        if(onSale === "buy") {
            const newFormValues = {
                ...formValues,
                onSale: false,
            }
            console.log(newFormValues);
            return newFormValues
        }

      
      }


    if (isLogged) {

        return(

       
            <Layout isLogged={isLogged} title="Nodepop React">
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