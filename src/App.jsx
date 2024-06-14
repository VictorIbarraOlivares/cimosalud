import * as React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import ScrollToTop from "./components/utils/ScrollToTop"
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
import Masoterapia from "./components/especialidades/Masoterapia"
import Especialidades from "./components/especialidades/Especialidades"
import FonasaOrtodoncia from "./components/convenios/FonasaOrtodoncia"
import TerapiaOcupacional from "./components/especialidades/TerapiaOcupacional"
import Bomberos from "./components/convenios/Bomberos"
import Fonasa from "./components/beneficios/Fonasa"
import FonasaA from "./components/beneficios/FonasaA"
import FonasaB from "./components/beneficios/FonasaB"
import FonasaC from "./components/beneficios/FonasaC"
import FonasaD from "./components/beneficios/FonasaD"

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
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
          <Route element={<Masoterapia />} path="/especialidades/masoterapia" />
          <Route element={<TerapiaOcupacional />} path="/especialidades/terapia-ocupacional" />

          <Route element={<FonasaOrtodoncia />} path="/convenios/fonasa-ortodoncia" />
          <Route element={<Bomberos />} path="/convenios/bomberos-chile" />

          <Route element={<Fonasa />} path="/beneficios/fonasa" />
          <Route element={<FonasaA />} path="/beneficios/fonasa-a" />
          <Route element={<FonasaB />} path="/beneficios/fonasa-b" />
          <Route element={<FonasaC />} path="/beneficios/fonasa-c" />
          <Route element={<FonasaD />} path="/beneficios/fonasa-d" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
