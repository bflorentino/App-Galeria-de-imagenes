import { useState } from "react"

export const useCounter = ( value, lenght ) => {

    const [ counter, setCounter ] = useState( value );
    const [ countChanged, setCountChanged ] = useState(false);

    const increment = () => {
        if(counter < lenght){
            setCounter(counter + 1);
            setCountChanged(true);
        } 
    }
    const decrease = () =>{
        if(counter > 1){
            setCounter(counter - 1);
            setCountChanged(true);
        } 
    } 

    return (
        {
        counter,
        countChanged,
        setCounter,
        setCountChanged,
        increment,
        decrease
    });
}