import React, { useState } from 'react'
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'


function App() {

    const [presupuesto, guardarPresupuesto] = useState(0)
    const [preguntaPresupuesto, guardarPregunataPresupuesto] = useState(true)
    return (
        <div className="App container">
            <header>
                <h1>Gasto Semanal</h1>
                <div className="contenido-principal contenido">
                    {(preguntaPresupuesto) ?
                        <Pregunta guardarPresupuesto={guardarPresupuesto}
                                  guardarPregunataPresupuesto={guardarPregunataPresupuesto}
                        />
                        : (
                            <div className="row">
                                <div className="one-half column">
                                    <Formulario />
                                </div>
                                <div className="one-half column">
                                    <p>2</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </header>
        </div>
    )
}

export default App
