

import React from 'react';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import { Redirect } from 'react-router-dom';
import NewAdForm from './NewAdForm';
import NewAdFormWithCustomHook from './NewAdFormCustomHook';



const NewAdPage = ({isLogged})=>{


    if (isLogged) {

        return(

       
            <Layout isLogged={isLogged} title="Nodepop React">
                <h1>PUBLICAR ANUNCIO</h1>
                <NewAdFormWithCustomHook/>
            </Layout>
            
        )

    } else {
        return (
            <Redirect to ='/login'/>
        )
    }
    
    
}

export default NewAdPage;