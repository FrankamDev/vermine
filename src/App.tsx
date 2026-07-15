import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import { Urgence237 } from "./pages/Urgence237"
import { NosServices } from "./pages/NosServices"
import { Contact } from "./pages/Contact"

import Tarifs from "./components/Tarifs"






const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />

      <Route path="/services" element={<NosServices/>} />
      <Route path="/services237" element={<Urgence237/>} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/tarifs" element={<Tarifs />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
