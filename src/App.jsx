import * as React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import Root from './components/web/Root'
import Inicio from "./components/pages/Inicio"
import Nosotros from "./components/pages/Nosotros"
import Contacto from "./components/pages/Contacto"
import Convenios from "./components/pages/Convenios"
import NuestrosProfesionales from "./components/pages/NuestrosProfesionales"
import Medicina from "./components/especialidades/Medicina"
import Nutricion from "./components/especialidades/Nutricion"
import Psicologia from "./components/especialidades/Psicologia"
import Odontologia from "./components/especialidades/Odontologia"
import Kinesiologia from "./components/especialidades/Kinesiologia"
import Fonoaudiologia from "./components/especialidades/Fonoaudiologia"
import Especialidades from "./components/especialidades/Especialidades"
import FonasaOrtodoncia from "./components/convenios/FonasaOrtodoncia"
import Bomberos from "./components/convenios/Bomberos"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route element={<Inicio />} path="/" />
          <Route element={<Nosotros />} path="/nosotros" />
          <Route element={<NuestrosProfesionales />} path="/nuestros-profesionales" />
          <Route element={<Contacto />} path="/contacto" />
          <Route element={<Especialidades />} path="/especialidades"  />
          <Route element={<Convenios />} path="/convenios"  />

          <Route element={<Medicina />} path="/especialidades/medicina-general" />
          <Route element={<Odontologia />} path="/especialidades/odontologia" />
          <Route element={<Kinesiologia />} path="/especialidades/kinesiologia" />
          <Route element={<Fonoaudiologia />} path="/especialidades/fonoaudiologia" />
          <Route element={<Psicologia />} path="/especialidades/psicologia"  />
          <Route element={<Nutricion />} path="/especialidades/nutricion"  />

          <Route element={<FonasaOrtodoncia />} path="/convenios/fonasa-ortodoncia"  />
          <Route element={<Bomberos />} path="/convenios/bomberos-chile"  />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
