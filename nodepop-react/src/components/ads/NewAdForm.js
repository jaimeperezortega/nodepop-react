
import React from 'react';

import Button from '../shared/Button';
import FormField from '../shared/FormField';

import '../auth/LoginForm.css';
import T from 'prop-types';
import Checkbox from '../shared/SessionCheckBox';

const NewAdForm = () =>{

    const clickOnCheckBox = () => {
        // const text = ""
        // value ? text="En venta" : text = "Compro"
        console.log("Click on checkbox");
        
      }

    const [inputs, setInputs] = React.useState({
        title: '',
        price: '',
    });

    const handleSubmit = event =>{
        event.preventDefault();
        console.log("Click en submit");
        
    }

    const handleInputChange = event =>{
        setInputs(oldCredentials => {

            const newInputs = {
                ...oldCredentials,
                [event.target.name]: event.target.value,
            }
           return newInputs
        });
        
    }

    

    return (
        <form className="loginForm" onSubmit = {handleSubmit}>
        <FormField
          type="text"
          name="title"
          label="Nombre del producto"
          className="loginForm-field"
          value={inputs.title}
          onChange ={handleInputChange}
        />
        <FormField
          type="text"
          name="price"
          label="Precio del producto"
          className="loginForm-field"
          value={inputs.price}
          onChange = {handleInputChange}
        />
       
      <Checkbox clickOnCheckBox={clickOnCheckBox} title={"Vendo"} value={true}  />
      <Checkbox clickOnCheckBox={clickOnCheckBox} title={"compro"} value ={false}  />
        <Button type="submit" className="loginForm-submit" variant="primary" disabled={ !inputs.title || !inputs.price} > 
  
        
          Log in
        </Button>
      </form>
    )
}

export default NewAdForm;