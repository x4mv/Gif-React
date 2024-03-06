import { renderHook, waitFor } from "@testing-library/react"
import useFetchGifs from "../../src/hooks/useFetchGifs"

describe('Probando el hook useFetchGifs', () => {
    
    
    test('Debe de regresar el estado inicial', () => {


        //* Evaluamos el estado del custom hook inicial
        const { result } = renderHook(() => useFetchGifs('One punch'))

        const { images, isLoading } = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()


    })

    test('Devuelve un arr de imgs y isLoading false', async () => {


        //* Evaluamos el estado del custom hook inicial
        const { result } = renderHook(() => useFetchGifs('One punch'))

        //* Esperamos a que devuelva la promesa
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        )

        //* Evaluamos el resultado de la promesa
        const { images, isLoading } = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy() 


    })


})