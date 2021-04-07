import {React, useEffect, useState} from 'react';

import Button from '../shared/Button';
import FormField from '../shared/FormField';

import '../auth/LoginForm.css';
import T from 'prop-types';
import Checkbox from '../shared/SessionCheckBox';
import { useForm } from '../../hooks/useForm';
import {Redireec} from 'react-router-dom';

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

    const [sale, setOnSale] = useState(false);

    const checkOnCheckBox = () =>{
        setOnSale(!sale);
        console.log("clicado el checkbox")
    }




    const{name, price, tags} = formValues;

    
    const [adImage, setAdImage] = useState(null)

    const handleUploadImage = (event) =>{
        const adImage = event.target.files[0];
        console.log(adImage)
        setAdImage(adImage);
    }

    



    const handleSubmit = event =>{
        event.preventDefault();
        if(adImage){
            onSubmit(formValues, sale, adImage)
        } else {
            onSubmit(formValues, sale);
        }
        
        
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

        <Checkbox title="Marcar para venta" onClick={checkOnCheckBox}/>
        {/* <label>
            <input 
            type="radio" 
            value= "sell"
            name="sale"
            checked={sale === "sell"}
            onChange={handleChangeOnCheckbox} />
            Vendo
      </label>
      <label>
            <input
            name="sale" 
            type="radio"
            checked={sale === "buy"}
            value= "buy"
            onChange={handleChangeOnCheckbox} />
            Compro
      </label> */}
      
            
            
        </div>


        <div>
            <div>
                <label for="adImage">Foto del artículo:</label>
            </div>
            
            <input onChange={handleUploadImage} type="file" id="adImage" name="adImage"/>
        </div> 

        <Button type="submit" className="loginForm-submit" variant="primary" > 
  
        
          Publicar
        </Button>
      </form>
    )
}

export default NewAdFormWithCustomHook;