import {React, useEffect, useState} from 'react';

import Button from '../shared/Button';
import FormField from '../shared/FormField';

import '../auth/LoginForm.css';
import T from 'prop-types';
import Checkbox from '../shared/SessionCheckBox';
import { useForm } from '../../hooks/useForm';

const NewAdFormWithCustomHook = () =>{

    const [formValues, handleInputChange] = useForm({
        title:"",
        price:"",
        tag:"",

    });

    const [onSale, setOnSale] = useState(true);




    const{title, price} = formValues;


    const handleSubmit = event =>{
        event.preventDefault();
        console.log(formValues)
    }

    const handleChangeOnCheckbox = event =>{
        setOnSale(event.target.value);
    }

    return (
        <form className="loginForm" onSubmit = {handleSubmit}>
        <FormField
          type="text"
          name="title"
          label="Nombre del producto"
          className="loginForm-field"
          value= {title}
          onChange = {handleInputChange}
        />
        <FormField
          type="text"
          name="price"
          label="Precio del producto"
          className="loginForm-field"
          value= {price}
          onChange = {handleInputChange}
        />

        <h3>Etiqueta</h3>
            <select
                
                name= "tag"
                onChange={handleInputChange}
                className="browser-default custom-select">
                 <option  value={"lifestyle"}>Lifestyle</option>
                 <option value={"mobile"}>Mobile</option>
                 <option value={"motor"}>Motor</option>
                 <option value={"work"}>Work</option>
                 
            </select>
        <div>
        <h3>¿Vendes o compras?</h3>
        <label>
            <input 
            type="radio" 
            value= "sell"
            name="onSale"
            checked={onSale === "sell"}
            onChange={handleChangeOnCheckbox} />
            Vendo
      </label>
      <label>
            <input
            name="onSale" 
            type="radio"
            checked={onSale === "buy"}
            value= "buy"
            onChange={handleChangeOnCheckbox} />
            Compro
      </label>
      
            
            
        </div>
            

        <Button type="submit" className="loginForm-submit" variant="primary" > 
  
        
          Log in
        </Button>
      </form>
    )
}

export default NewAdFormWithCustomHook;