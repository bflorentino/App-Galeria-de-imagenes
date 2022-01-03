import { useState } from 'react';

export const useForm = ( init = {}) => {
    
    // const [ formState, setInputValue ] = useState(init);

    // const handleInputChange = ( { target }) => {
    //     setInputValue(target.value);
    // }
    
    const [ formState, setFormState ] = useState(init);
    
    const handleInput = ( { target } ) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }
    
    const handleCheckBox = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.checked
        })
    }
    
    const setForm = (value, name) => {
        setFormState({
            ...formState,
            [ name ]: value 
        })
    }
    // }

    // return [formState, handleInputChange, setForm]

    return [ formState, handleInput, setForm, handleCheckBox ]
}