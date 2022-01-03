import { useState } from 'react';

export const useForm = ( init = "") => {
    
    const [ formState, setInputValue ] = useState(init);

    const handleInputChange = ( { target }) => {
        setInputValue(target.value);
    }

    const setForm = (value) => setInputValue(value);

    return [formState, handleInputChange, setForm]
}