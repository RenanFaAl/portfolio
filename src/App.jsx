import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import LifePlus from "./pages/LifePlus";
import PetShop from "./pages/Petshop";
import Horizon from "./pages/Horizon"

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/lifeplus" element={<LifePlus />} />
          <Route path="/projetos/petshop" element={<PetShop />} />
          <Route path="/projetos/horizon" element={<Horizon />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;