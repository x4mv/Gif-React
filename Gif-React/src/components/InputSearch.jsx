import PropTypes from "prop-types"
import { useState } from "react"



        
export const InputSearch = ({onNewSearch }) => {

    // Mantiene el valor de lo que vamos a buscar
    const [category, setCategory] = useState('')
    
    

    const  handleChange = ({target}) => {
        setCategory(target.value)
        
    }
    
    const handleSubmit = (e) => {
        
        e.preventDefault();

        //* Verificando que el input no este vacio
        const categoryValue = category.trim()

        if (categoryValue === ''){
            return;
        }

        
        //* haciendo que el la fn devuelva el nuevo valor de la busqueda
        //* para agg en el componente padre
        onNewSearch(categoryValue)

        //* Antes de hacer que el input haga la insercion aca 
        // setCategories((categories) => [...categories, category])

        
        setCategory('')
        
    }

    return (


        
        <form
            onSubmit={handleSubmit}
            aria-label="form"
            >
            <input 
            type="text"
            onChange={handleChange}  
            placeholder="Buscar Gifs"
            value={category}
            />
        </form>
        
        
    )
}



InputSearch.propTypes = {
    onNewSearch: PropTypes.func.isRequired
}