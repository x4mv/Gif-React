import { render, screen } from "@testing-library/react"
import GifApp from '../../src/GifApp'
describe('probando <GifApp />', () => { 

    test('Deberia renderizar el titulo', () => { 

        render(<GifApp />)

        expect(screen.getByRole('heading', {level:1}).textContent).toBe('Gifs App')
        
    })
})