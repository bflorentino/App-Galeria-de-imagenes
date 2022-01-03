import React from 'react'

const GridItem = ( {src} ) => {
    return (
        <div className='grid-image'>
            <img className='animate__fadeIn' src={ src } alt="bryan 2x2" />
        </div>
    )
}

export default GridItem
