

import React from 'react';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import { Redirect } from 'react-router-dom';



const NewAdPage = ({isLogged})=>{


    if (isLogged) {

        return(

       
            <Layout isLogged={isLogged} title="Nodepop React">
                <h1>NEW AD PA ccv cvxGE</h1>
            </Layout>
            
        )

    } else {
        return (
            <Redirect to ='/login'/>
        )
    }
    
    
}

export default NewAdPage;