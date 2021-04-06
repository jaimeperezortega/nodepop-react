

import React from 'react';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import { Redirect } from 'react-router-dom';
import NewAdForm from './NewAdForm';
import NewAdFormWithCustomHook from './NewAdFormCustomHook';
import { publishAd } from '../../api/publishAd';



const NewAdPage = ({isLogged, onLogout})=>{

    const handleSubmit = async  (formValues, sale, adImage) =>{
      
       
        
        if(sale) {
            if(adImage){
                console.log(sale)
                const newFormValues = {
                    ...formValues,
                    sale: true,
                    adImage: adImage,

            }
            
            const formData = new FormData(newFormValues)
            formData.append(sale,true);
            formData.append(adImage, adImage);
            formData.append(name,name )
            formData.append(price, price)
            formData.append(tags, tags)
            console.log(formData)
            await publishAd(formData)
           
            } else {
                console.log(sale)
                const newFormValues = {
                    ...formValues,
                    sale: true,

            }
            const formData = new FormData(newFormValues)
            formData.append("sale",true);
            formData.append("adImage", adImage);
            formData.append("name",name )
            formData.append("price", price)
            formData.append("tags", tags)
            console.log(formData)
            await publishAd(formData)

            }
            
        } else {
            if(adImage){
                console.log(sale)
                const newFormValues = {
                    ...formValues,
    
                    sale: false,
                    adImage:adImage,
                }
                const formData = new FormData(newFormValues)
                console.log(formData)
                await publishAd(formData)

            } else {
                console.log(sale)
                const newFormValues = {
                    ...formValues,
    
                    sale: false,
        
                }
                const formData = new FormData(newFormValues)
                console.log(formData)
                await publishAd(formData)

            }
           

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