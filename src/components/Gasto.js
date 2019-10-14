import React from 'react'

function Gasto({gasto}) {

    const eliminarGasto = (id) => {
        console.warn("Aun por implementar!!!");
    }

    return (
        <li className="gastos">
            <p>
                {gasto.nombreGasto}
                <span className="gasto"> {gasto.cantidadGasto}</span>
                <button 
                    type="button"
                    onClick={()=> eliminarGasto(gasto.id)}
                    >
                    Eliminar</button>
            </p>
        </li>
    )
}

export default Gasto
