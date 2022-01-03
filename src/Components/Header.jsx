import React, { useState } from 'react'
import darkMode from '../Img/moon_symbol_60px.png';
import ligthMode from '../Img/ligth-mode.png';
import { setWhiteMode, setDarkMode } from '../Helpers/Themes';

const Header = () => {
    
    const [ selectedTheme, setSelected ] = useState("white"); 

    const setTheme = (e) => {

        if(selectedTheme === "white"){
            setDarkMode();
            setSelected("dark");
            return;
        }
        setWhiteMode();
        setSelected("white");
    }

    return (
        <div className='header white-header' id='header'>

        <button className='theme-btn' onClick={ setTheme }>
            <img 
                src={ selectedTheme === "white"? darkMode : ligthMode } 
                alt="Modo oscuro" 
                className='btn-theme-icon' 
            />
        </button>

            <h1 className='white-h1 dark-h1' id='title'>Images Gallery</h1>
            <hr />
        </div>
    )
}

export default Header
