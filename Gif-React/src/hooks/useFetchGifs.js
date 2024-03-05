import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"




const useFetchGifs = (category) => {

    const [images, setImages] = useState([])

    const [isLoading, setisLoading] = useState(true)

    //* obteniendo las imagenes de mi funcion
    //* el use effect no puede ser asincrono
    const getImages = async () => {

        const gifs = await getGifs(category)
        setImages(gifs)
        setisLoading(false)
    }
    
    useEffect(() => {
        getImages() 
    }, [])

    return { 
        images,
        isLoading
    
    }
}

export default useFetchGifs