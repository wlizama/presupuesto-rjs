import React, { useState } from 'react'
import Error from './Error'

function Formulario() {

    const [nombreGasto, guardarNombreGasto] = useState('')
    const [cantidadGasto, guardarCantidadGasto] = useState(0)
    const [error, guardarError] = useState(false)

    const agregarGasto = e => {
        e.preventDefault()

        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === '') {
            guardarError(true)
            return
        }
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
            {error ? 
            <Error mensaje="Ambos campos son obligatorios" />:
            null
            }
            <div className="campo">
                <label>Nombre de gasto</label>
                <input type="text"
                       className="u-full-width"
                       placeholder="Ejm. Transporte"
                       onChange={e => guardarNombreGasto(e.target.value)}
                       />
            </div>
            <div className="campo">
                <label>Cantidad de gasto</label>
                <input type="text"
                       className="u-full-width"
                       placeholder="Ejm. 150"
                       onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
                       />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar gasto" />
        </form>
    )
}

export default Formulario
