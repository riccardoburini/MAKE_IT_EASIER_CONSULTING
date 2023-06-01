import "./App.css";
import Homepage from "./components/Homepage";
import Consulenzadiarmocromia from "./components/Consulenzadiarmocromia";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personalsh from "./components/Personalsh";
import Stilepers from "./components/Stilepers";
import Organizzazionegua from "./components/Organizzazionegua";
import Login from "./components/Login";
import Registrazione from "./components/Registrazione";
import Contatti from "./components/Contatti";
import Chisono from "./components/Chisono";
import Giftcard from "./components/Giftcard";
function App() {
  return (
    <BrowserRouter>
      <Routes style={{ fontFamily: " 'Montserrat',sans-serif" }}>
        <Route path="/" element={<Homepage />} />
        <Route path="/consulenza-di-armocromia" element={<Consulenzadiarmocromia />} />
        <Route path="/personal-shopper" element={<Personalsh />} />
        <Route path="/stile-personale" element={<Stilepers />} />
        <Route path="/organizzazione-guardaroba" element={<Organizzazionegua />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrazione" element={<Registrazione />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/chi-sono" element={<Chisono />} />
        <Route path="/gift-card" element={<Giftcard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
