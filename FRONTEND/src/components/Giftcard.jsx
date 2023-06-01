import Barra from "./Barra";
import giftcard from "../img/giftcard.webp";
import Footer from "./Footer";

function Giftcard() {
  return (
    <>
      <Barra />
      <img style={{ width: "100%" }} src={giftcard} alt="" />
      <div className="text-center">
        <h2 className="mt-5 " style={{ color: "rgb(214,47,255)" }}>
          COME FUNZIONA
        </h2>
        <p className="lh-lg mx-3">
          Con l'acquisto riceverai una GIFT CARD in formato PDF, tramite mail, oppure in formato CARTACEO nel mio studio
          a Perugia. <br />
          Una volta consegnato, sarà direttamente il festeggiato/a a contattarmi per fissare un appuntamento con me!{" "}
          <br />
          La Gift Card ha una validità di un anno.
        </p>
      </div>
      <Footer />
    </>
  );
}
export default Giftcard;
