import { Routes, Route } from "react-router-dom"

import App from "./App.jsx"
import Login from "./Views/Login/Login.jsx"
import CrearCuenta from "./Views/Cuenta/CrearCuenta.jsx"
import Home from "./Views/Home/Home.jsx"
import CodeVerify from "./Views/Cuenta/CodeEmail.jsx"
import CompleteProfile from "./Views/Cuenta/CompleteProfile.jsx"
function Rutas() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/Login" element={ <Login /> } />
        <Route path="/Account" element={ <CrearCuenta /> } />
        <Route path="/Home" element={ <Home /> } />
        <Route path="/CodeVerify" element={ <CodeVerify /> } />
        <Route path="/CompleteProfile" element={ <CompleteProfile /> } />
      </Routes>
    </div>
  )
}

export default Rutas