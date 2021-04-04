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
        onSale:true,
        lifestyle:false,
        mobile:false,
        motor:false,
        work: false

    });

    // const [checkedItems, setCheckedItems] = useState({tags:[]});

    // const handleChangeCheckbox = (event) =>{
    //     // setCheckedItems({...checkedItems, tags.push(event.target.checked)})
    //     const selectedTags = [];
    //     // selectedTags.push(event.target.checked)
    //     console.log(selectedTags)
    // }

    // useEffect(() => {
    //     console.log("checkedItems: ", formValues)
        
    // }, [formValues])

    // const [selectValue, setSelectValue] = useState(true)

    // const handleSelectChange = (event) =>{

    //     setSelectValue(event.target.value)

    // }

    const{title, price} = formValues;

    useEffect (() =>{
        console.log("cambio en el titulo");
    }, [title])


    const handleSubmit = event =>{
        event.preventDefault();
        console.log(formValues)
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

            <select
                defaultValue={true}
                name= "onSale"
                onChange={handleInputChange}
                className="browser-default custom-select">
                 <option selected value={true}>Vendo</option>
                 <option value={false}>Compro</option>
                 
            </select>
        <div>
        <h3>Tags</h3>
            <Checkbox onChange={handleInputChange} name= "lifestyle" title= "lifestyle" checked={true}/>
            <Checkbox onChange={handleInputChange} name= "mobile" title= "mobile" checked="mobile" />
            <Checkbox onChange={handleInputChange} name= "motor" title= "motor" checked="motor" />
            <Checkbox onChange={handleInputChange} name= "work" title= "work" checked="work" />
            
        </div>
            

        <Button type="submit" className="loginForm-submit" variant="primary" > 
  
        
          Log in
        </Button>
      </form>
    )
}

export default NewAdFormWithCustomHook;