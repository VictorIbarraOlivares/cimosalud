import * as React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Root from './components/web/Root'

import Header from './components/web/Header'
import reactLogo from './assets/react.svg'
import './App.css'
import Inicio from "./components/pages/Inicio"
import Nosotros from "./components/pages/Nosotros"
import Servicios from "./components/pages/Servicios"
import Contacto from "./components/pages/Contacto"
import Medicina from "./components/especialidades/Medicina"
import Odontologia from "./components/especialidades/Odontologia"
import Kinesiologia from "./components/especialidades/Kinesiologia"
import Fonoaudiologia from "./components/especialidades/Fonoaudiologia"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route element={<Inicio />} path="/" />
          <Route element={<Nosotros />} path="/nosotros" />
          <Route element={<Servicios />} path="/servicios" />
          <Route element={<Contacto />} path="/contacto" />

          <Route element={<Medicina />} path="/especialidades/medicina-general" />
          <Route element={<Odontologia />} path="/especialidades/odontologia" />
          <Route element={<Kinesiologia />} path="/especialidades/kinesiologia" />
          <Route element={<Fonoaudiologia />} path="/especialidades/fonoaudiologia" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
