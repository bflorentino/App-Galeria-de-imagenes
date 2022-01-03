import React, { useEffect } from 'react';
import '../CSS/SlideImage.css';
import { useCounter } from '../Hooks/useCounter';
import { useForm } from '../Hooks/useForm';

const Slider = ( { images } ) => {

    const { counter,
            countChanged,
            setCounter,
            setCountChanged,
            increment,
            decrease } = useCounter(1, images.length);
    
    const [ formState, 
            handleInputChange, 
            setForm ] = useForm(1);
    
    const handleSubmit = e => { 
        e.preventDefault();
        setCounter(parseInt(formState));
    }

    useEffect(() => {
        if(countChanged){
            setForm(counter);
            setCountChanged(false);
        }
    }, [counter, setForm, countChanged, setCountChanged]);

    return (
        <>
        <div className='slider'>
            <div className='control'>
                <button onClick={ decrease }>
                    {`<`}
                </button>
            </div>
            <div className='img-slide'>
                <img src={ images[counter - 1].src } alt="bryan" />
            </div>
            <div className='control'>
                <button  onClick={ increment }>
                    {`>`}
                </button>
            </div>
        </div>
            <form onSubmit={ handleSubmit } className='pages' >
                <input 
                    type="number" 
                    min={1} 
                    max={images.length}
                    value={ formState }
                    onChange={ handleInputChange }
                />
                <label className='lbl white-lbl'> de {images.length} </label>
            </form>
        </>
    )
}

export default Slider;