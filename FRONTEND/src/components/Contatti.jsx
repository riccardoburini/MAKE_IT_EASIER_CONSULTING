import Barra from "./Barra";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import SendEmail from "./Sendemail";
import bigliettino from "../img/bigliettino.webp";
function Contatti() {
  return (
    <>
      <Barra />
      <h1 className="text-center mt-3 mb-3 " style={{ color: "rgb(214,47,255)" }}>
        PRENOTA UNA CONSULENZA
      </h1>
      <div className="d-flex flex-column text-center">
        <h5 style={{ color: "rgb(145,150,251)" }} className="text-center mb-3">
          Scrivimi sul profilo Instagram Makeiteasier.consulting
        </h5>
        <a
          style={{ color: "rgb(214,47,255)" }}
          className="mb-3"
          target="_ blank"
          href="https://www.instagram.com/makeiteasier.consulting/"
        >
          Clicca qui
        </a>
        <h5 style={{ color: "rgb(145,150,251)" }} className="mb-3">
          Oppure contattami scrivendo qui sotto la/e consulenza a cui sei interessato/a!
        </h5>
        <SendEmail />
        <img style={{ width: "100%" }} className="mt-5" src={bigliettino} alt="" />
      </div>
      <Footer />
    </>
  );
}
export default Contatti;
