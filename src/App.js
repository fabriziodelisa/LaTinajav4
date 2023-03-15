import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Frases from "./paginas/Frases";
import Fragmentos from "./paginas/Fragmentos";
import Escritos from "./paginas/Escritos";
import Footer from "./componentes/Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div href="#" class="banner">
        <h1>LA TINAJA DE DIÓGENES</h1>
      </div>
      <section id="pag-principal">
        <Routes>
          <Route path="/frases" element={<Frases />} />
          <Route path="/fragmentos" element={<Fragmentos />} />
          <Route path="/escritos" element={<Escritos />} />
          <Route path="*" element={<Frases />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}
