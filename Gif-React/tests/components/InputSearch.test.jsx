import { fireEvent, render, screen } from "@testing-library/react"
import { InputSearch } from "../../src/components/InputSearch"

describe('Probando el <InputSeatch />', () => { 

    const value = 'Saitama'

    test('Debe de cambiar el valor de la caja de texto', () => { 

        //* se crea el sujeto de pruebas 
        render(<InputSearch
            onNewSearch={() => {}}
        />)

        //* se extrae la instancia de lo que se quiere probar
        const input = screen.getByRole('textbox');

        //*Se dispara un evento (escribir en el textbox)
        //*
        fireEvent.input(input, {target:{value: value}})

        //* comparamos que se cambie el valor del value 
        expect(input.value).toBe(value)
    })

    test('Debe llamar onNewCategory si tiene un valor', () => { 

        const inputValue = 'Saitama'

        const onNewCategory = jest.fn()
        
        //* renderizamos el componente
        render(<InputSearch
        onNewSearch={ onNewCategory}
        />)

        //*Obtenemos las instancias que queremos evaluar
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //* simulamos el comportamiento
        //* escribimos en el search/textbox
        fireEvent.input(input, {target:{value: inputValue}})

        //* enviamos el formulario
        fireEvent.submit(form)

        //* Vemos si se reseteo el formulario
        expect(input.value).toBe('')

        //*Evaluamos la fn sea llamada
        expect( onNewCategory ).toHaveBeenCalled();
        //* evaluamos que se haya enviado x cantidad de veces
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        //* que sea llamado con el valor que le pasemos
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)

    })

    test('si se envia el formulario vacio, no hace nada', () => { 


        const onNewCategory = jest.fn()
        
        //* renderizamos el componente
        render(<InputSearch
        onNewSearch={ onNewCategory}
        />)

        //*Obtenemos las instancias que queremos evaluar
        const form = screen.getByRole('form');

        //* simulamos el comportamiento

        //* enviamos el formulario
        fireEvent.submit(form)

        //* evaluamos que se haya enviado x cantidad de veces
        expect(onNewCategory).toHaveBeenCalledTimes(0)
        

    })
})