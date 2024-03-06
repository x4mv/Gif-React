import { render, screen } from "@testing-library/react"
import { GifsList } from "../../src/components/GifsList"
import useFetchGifs from "../../src/hooks/useFetchGifs"

//* haciendo un mock de mi customHook
jest.mock("../../src/hooks/useFetchGifs")

describe('Probando <GifList />', () => { 
    

    const category = 'One punch'

    test('Debe mostrar el loading inicialmente', () => {

        //* simulando lo que devuelve mi custom hook
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        //* renderizo el componente
        render( <GifsList
            category={category}
        />) 

        expect(screen.getByText('Cargando...')).toBeTruthy()

    })

    test('Debe mostrar items, cuando termine de cargar', () => { 

        //* simulando images
        const gifs = [
            {
                id:'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id:'DEF',
                title: 'Saitama2',
                url: 'https://localhost/saitama2.jpg'
            }
        ]
        //* simulando lo que devuelve mi custom hook
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifsList 
            category={category}
        />)

        //* Evaluamos que se rendericen las dos imagenes que tenemos 
        expect(screen.getAllByRole('img').length).toBe(2);

        

    })



})
