import { Routes, Route } from "react-router-dom"

import App from "./App.jsx"
import Login from "./Views/Login/Login.jsx"
import CrearCuenta from "./Views/Cuenta/CrearCuenta.jsx"

function Rutas() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/Login" element={ <Login /> } />
        <Route path="/Account" element={ <CrearCuenta /> } />
      </Routes>
    </div>
  )
}

export default Rutas