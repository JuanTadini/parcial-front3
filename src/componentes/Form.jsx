import React, { useState } from 'react'

const Form = ({setUsuario}) => {
    const [cliente, setCliente] = useState({
        nombre: '',
        serie: ''
    })
    const [validado, setValidado] = useState(false);
    const [error, setError] = useState(false);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (cliente.nombre.trim().length > 3 && cliente.serie.length >= 6) {
            // setValidado(true);
            setUsuario({cliente: cliente, form: true})
            setError(false);
        } else {
            setUsuario({form: false})
            setError(true);
        }
    }

  return (
    <div>
        <form onSubmit={onSubmitForm}>
            <label>Por favor ingresa tu nombre</label>
            <input type="text" onChange={(event) => setCliente({...cliente, nombre: event.target.value})}/>
            <label>Nombre de la serie</label>
            <input type="text" onChange={(event) => setCliente({...cliente, serie: event.target.value})}/>
            <button type='submit'></button>
            {/* {validado && <h3>Hola {cliente.nombre}, tu serie favorita es: {cliente.serie}</h3>} */}
            {error && <h3 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h3>}
        </form>
    </div>
  )
}

export default Form