import React, { memo } from 'react'
import PropTypes from 'prop-types'
import '../CSS/Searcher.css';
import { getPicturesByCategory } from '../Services/service';
import { useForm } from '../Hooks/useForm';

const SearchCategory = ( { setImages, setViewMode } ) => {

    const [ formState, handleInput, setForm ] = useForm({searcher:""});

    const handleSubmit = e =>  {
        e.preventDefault();
        getPicturesByCategory( formState.searcher )
            .then(images =>{
                setImages(images);
                setForm("", "searcher");
                setViewMode();
            }); 
    }

    return (
        <>
        <form className='form-search-category' onSubmit={ handleSubmit }>
            <input 
                type="text"
                id='input-searcher'
                className='input-category white-searcher'
                placeholder='Buscar por categoría'
                name='searcher'
                value={ formState.searcher }
                autoComplete = 'off'
                onChange={ handleInput }
            />
            <button 
                type='submit' 
                className='btn-search-category'>
                Buscar
            </button>
        </form>
        </>
    )
}

SearchCategory.propTypes = {
    setImages: PropTypes.func.isRequired
}

export default memo(SearchCategory);