import React, { memo } from 'react'
import GridItem from './GridItem'
import '../CSS/GridImages.css';

const GalleryGrid = ( { images } ) => {
    return (
        <div className='Gallery-grid'>
            {
                images.map(image => (
                    <GridItem 
                        key = { image.id}
                        src = { image.src } />
                ))
            }
        </div>
    )
}

export default memo(GalleryGrid);