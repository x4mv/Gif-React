import { url, api_key } from "./credentials"

export const getGifs = async (category) => {
    

    const resp = await fetch(`https://${url}?api_key=${api_key}&q=${category}&limit=5`);
    const {data} = await resp.json()

    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    

    return gifs
}