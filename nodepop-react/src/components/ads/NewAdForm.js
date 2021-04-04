
import React from 'react';

import Button from '../shared/Button';
import FormField from '../shared/FormField';

import '../auth/LoginForm.css';
import T from 'prop-types';
import Checkbox from '../shared/SessionCheckBox';

const NewAdForm = () =>{



    const [inputs, setInputs] = React.useState({
        title: '',
        price: '',
        onSale: '',
        tags: "",
    });

    const handleClickOnOption = (event, value) =>{
        console.log("Click en Option", value);
        setInputs(oldCredentials => {

            const newInputs = {
                ...oldCredentials,
                [event.target.name]: event.target.value,
            }
           return newInputs
        });
        

 
    }

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

    const clickOnCheckBox = (event) =>{
        console.log("Click on checkbox", event.target.value)
        setInputs(oldCredentials => {

            const newInputs = {
                ...oldCredentials,
                [oldCredentials.tags]: event.target.value,
            }
           return newInputs
        });
        // setInputs(oldCredentials => {

        //     const newInputs = {
        //         ...oldCredentials,
        //         [inputs.tags]: event.target.value,
        //     }
        //    return newInputs
        // });
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
       
    

        <select name="select">
            <option onSubmit ={handleInputChange}  value= {true}>Vendo</option>
            <option onSelect ={handleInputChange} value= {false} >Compro</option>
            
    </select> 
    <div>

            <Checkbox clickOnCheckBox={clickOnCheckBox} name= "lifestyle" title= "lifestyle" checked="lifestyle" />
            <Checkbox clickOnCheckBox={clickOnCheckBox} name= "mobile" title= "mobile" value="mobile" />
            <Checkbox clickOnCheckBox={clickOnCheckBox} name= "motor" title= "motor" value="motor" />
            <Checkbox clickOnCheckBox={clickOnCheckBox} name= "work" title= "work" value="work" />
    </div>
   
    
    


        <Button type="submit" className="loginForm-submit" variant="primary" disabled={ !inputs.title || !inputs.price} > 
  
        
          Log in
        </Button>
      </form>
    )
}

export default NewAdForm;