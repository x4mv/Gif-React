import GifItem from "./GifItem"
import useFetchGifs from "../hooks/useFetchGifs"
import PropTypes from 'prop-types'


export const GifsList = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);
    
    if (isLoading) return <p>Cargando...</p>

    return (
        <>
            <h1>{category}</h1>
            <div className="card-grid">
                {images.map((image)=>(
                    
                    <GifItem 
                    key={image.id} 
                    {...image}
                    />
                ))}
            </div>
            
            
            
        </>
    )
}


GifsList.propTypes = {
    category: PropTypes.string.isRequired
}
