

import React from 'react';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import { Redirect } from 'react-router-dom';
import NewAdForm from './NewAdForm';
import NewAdFormWithCustomHook from './NewAdFormCustomHook';
import { publishAd } from '../../api/publishAd';



const NewAdPage = ({isLogged})=>{

    const handleSubmit = async  (formValues, sale) =>{
      
       
        
        if(sale === "sell") {
            console.log(sale)
            const newFormValues = {
                ...formValues,
                sale: true,
            }
            console.log(newFormValues);
            await publishAd(newFormValues)
        }

        if(sale === "buy") {
            console.log(sale)
            const newFormValues = {
                ...formValues,

                sale: false,
            }
            console.log(newFormValues);
            await publishAd(newFormValues)
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