import React, { useState, useEffect, useCallback } from 'react';
import SearchCategory from './SearchCategory';
import GalleryGrid from './GalleryGrid';
import Header from './Header';
import Slider from './Slider';
import { getPictures } from '../Services/service';
import { Footer } from './Footer';

const Gallery = () => {

    const [ images, setImages ] = useState([]);
    const [ selectedViewMode, setSelectedViewMode ] = useState('grid');

    const handleRadio = (e) => setSelectedViewMode(e.target.value);

    const setViewMode = useCallback(()=> {
        setSelectedViewMode('grid');
    }, []) 

    useEffect(()=> {
        getPictures()
        .then(images => {
            setImages(images);
        })
    }, [])

    return (
        <>
        <Header /> 

        <div className='gallery-view'>
            <SearchCategory setImages={ setImages } setViewMode= { setViewMode } />
            <div className='radio-viewMode-select'>
                <div>
                    <input 
                        type="radio" 
                        value= { 'grid' } 
                        id='grid-view-choice' 
                        name='view-selection'
                        checked = { selectedViewMode === 'grid' ? true: false }
                        onChange={ handleRadio }
                    />
                    <label htmlFor="grid-view-choice" className='lbl white-lbl'>
                        Ver en formato de grillas
                    </label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        value= { 'slider' } 
                        id='gallery-view-choice' 
                        name='view-selection' 
                        checked =  { selectedViewMode === 'slider' ? true: false }
                        onChange={ handleRadio }
                    />
                    <label htmlFor="gallery-view-choice" className='lbl white-lbl'>
                        Ver Slider
                    </label>
                </div>
            </div>

            {
                (selectedViewMode === 'grid')
                ? <GalleryGrid images={ images } />
                : <Slider images = { images }/>
            }
        </div>
        <Footer />
        </>
    );
}

export default Gallery