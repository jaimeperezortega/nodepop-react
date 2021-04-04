import {React, useEffect, useState} from 'react';

import Button from '../shared/Button';
import FormField from '../shared/FormField';

import '../auth/LoginForm.css';
import T from 'prop-types';
import Checkbox from '../shared/SessionCheckBox';
import { useForm } from '../../hooks/useForm';

const NewAdFormWithCustomHook = ({onSubmit}) =>{

    const [formValues, setFormValues] = useState({
        name:"",
        price:"",
        tags:"",

    });

    const handleInputChange = ({target}) =>{

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const [onSale, setOnSale] = useState(true);




    const{name, price, tags} = formValues;


    

    const handleChangeOnCheckbox = event =>{
        setOnSale(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        onSubmit(formValues, onSale);
        
    }

    return (
        <form className="loginForm" onSubmit = {handleSubmit}>
        <FormField
          type="text"
          name="name"
          label="Nombre del producto"
          className="loginForm-field"
          value= {name}
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
                
                name= "tags"
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