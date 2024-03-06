import { Screen, render, screen } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"


describe('Probando <GifItem/>', () => { 

    const title = 'saitama'
    const url = 'https://google.com/'
    test('Is required a title and a url and match snapshot', () => { 
        
        const { container } = render(
            <GifItem
                title={title}
                url={url}
            />
        )
        expect(container).toMatchSnapshot()


    })

    test('debe mostrar la imagen con url y alt', () => { 

        render(<GifItem
            title={title}
            url={url}
        />)

        //* Comprobando que el url sea igual al que le mando
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('Probandp que el titulo exista', () => { 

        render(<GifItem
            title={title}
            url={url}
        />)

        expect(title).toBeTruthy()
    })
})