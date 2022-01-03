import React, { useEffect, useState, useRef } from 'react';
import '../CSS/SlideImage.css';
import { useCounter } from '../Hooks/useCounter';
import { useForm } from '../Hooks/useForm';

const Slider = ( { images } ) => {

    let timerId;
    const [ timer, setTimer ] = useState(0);
    const [ timerRunning, setTimerRunning ] = useState(false);
    const timerRef = useRef(timerId);

    const { counter,
            countChanged,
            setCounter,
            setCountChanged,
            increment,
            decrease } = useCounter(1, images.length);
    
    const [ formState, 
            handleInput, 
            setForm,
            handleCheckBox ] = useForm({
                                    timercheck:true,
                                    page: 1
                                });

    const { timercheck, page } = formState;
    
    const handleSubmit = e => { 
        e.preventDefault();
        setCounter(parseInt(page));
    }

    useEffect(() => {
        if(countChanged){
            setForm(counter, "page");
            setCountChanged(false);
        }
    }, [counter, setForm, countChanged, setCountChanged]);

    useEffect(()=> {
        const startWacht = () => {
            if(timercheck && !timerRunning){
                setTimerRunning(true);
                timerRef.current = setInterval(()=>{
                    if(counter < images.length){
                        setCounter(count => count + 1)
                        setCountChanged(true);
                        }
                    }, 5000);
                    setTimer(timerRef.current);
            }
        }
        startWacht();
    }, [
        timercheck, 
        timerRunning, 
        counter, 
        setCounter, 
        setCountChanged,
        images.length
    ]);

    useEffect(() => {
        if(!timercheck || countChanged){
            clearInterval(timerRef.current);
            setTimerRunning(false);
            setCountChanged(false);
        }
    }, [timercheck, countChanged, setCountChanged])

    useEffect(() => {
        return () => clearInterval(timerRef.current);
    }, [])


    return (
        <>
        <div className='slider'>
            <div className='control'>
                <button onClick={ decrease }>
                    {`<`}
                </button>
            </div>
            <div className='img-slide'>
                <img className='animate__animated animate__backInRight' src={ images[counter - 1].src } alt="bryan" />
            </div>
            <div className='control'>
                <button  onClick={ increment }>
                    {`>`}
                </button>
            </div>
        </div>
            <form onSubmit={ handleSubmit } className='pages' >
                <div>
                <input 
                    type="checkbox" 
                    id="ckeckCronometer"
                    name='timercheck'
                    onChange={ handleCheckBox }
                    checked = { timercheck ? true: false }
                />
                    <label className='lbl white-lbl'>Paginación automática</label>
                </div>

                <div>
                <input 
                    type="number" 
                    min={1} 
                    max={images.length}
                    name='page'
                    value={ page }
                    onChange={ handleInput }
                />
                <label className='lbl white-lbl'> de {images.length} </label>
                </div>

            </form>
        </>
    )
}

export default Slider;