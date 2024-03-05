import { useState } from "react";
import { InputSearch, GifsList } from './components'



const GifApp = () => {

    const [categories, setCategories] = useState(['POKEMON'])
    
    const onAddCategory  = (newCategory) =>{  
        

        //* validando que no sean repetidos los nombres 
        const existCategory = categories.some( category => category.toLowerCase() === newCategory.toLowerCase()  )

        
        if (existCategory) return console.log('ya existe'); 

        //* si no existe el nombre, entonces se agg al arreglo

        setCategories([newCategory, ...categories] )
    } 

    
    return (
        <>
        {/* Titulo */}
        <h1>Gifs App</h1>

        {/* Formulario */}
        <InputSearch 
            onNewSearch= {onAddCategory}
        />

        {/* Listados */}
        
        { categories.map( (category) => 
            (
                <GifsList category={category} key={category}/>
            )
        )}
        
        </>
    )
}

export default GifApp