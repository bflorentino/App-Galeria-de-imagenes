import APIKEY from './ApiKey'

const URL = "https://pixabay.com";

export const getPicturesByCategory = async( category ) => {

    // Get images from API by category

    const response = await fetch( `${URL}/api/?key=${APIKEY}&q=${ category }&per_page=200`);
    const { hits } = await response.json();
    return hits.map(image=>(
        {
            id: image.id,
            src: image.webformatURL
        }
    ));
}

export const getPictures = async( ) => {
    
    // Get images from API

    const response = await fetch( `${URL}/api/?key=${APIKEY}&per_page=200`);
    const { hits } = await response.json();
    return hits.map(image=>(
        {
            id: image.id,
            src: image.webformatURL
        }
    ));
}