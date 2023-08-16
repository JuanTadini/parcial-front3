import Card from './componentes/card'
import './App.css'
import Form from './componentes/Form'
import { useState } from 'react'

function App() {

  const [usuario, setUsuario] = useState({
    cliente: {},
    form: false
  })
  
  return (
    <div className='App'>
      <h1>Elegí tu serie favorita</h1>
      <Form setUsuario={setUsuario}/>
      {usuario.form && <Card persona={usuario.cliente}/>}
    </div>
  )
}

export default App
