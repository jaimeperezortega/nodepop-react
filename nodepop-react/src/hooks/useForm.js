
//Custom hook que me va a permitir manejar cualquier formulario

import React from 'react'

export const useForm = (initialState) => {
    

    const [values, setValues] = React.useState(initialState);

    const handleInputChange = ({target}) =>{

        setValues({
            ...values,
            [target.name]: target.value
        });
    }

   

return [values, handleInputChange]

}
