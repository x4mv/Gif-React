import { getGifs } from "../../src/helpers/getGifs"

describe('Probando la funcion getGifs', () => {

    test('Debe de retornar un arreglo', async () => { 
        const gifs = await getGifs('One punch');

        //* Nos aseguramos de que devuelva un arr
        expect(gifs.length).toBeGreaterThan(0)

        //* nos aseguramos de que cumpla ciertas properties
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })

    })
})