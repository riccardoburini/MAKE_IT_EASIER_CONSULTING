import Cards from "./Cards";
import armocromia from "../img/armocromia.webp";
import Organizzazioneguardaroba from "../img/Organizzazioneguardaroba.webp";
import personalshopper from "../img/personalshopper.webp";
import Personalstylingformen from "../img/Personalstylingformen.webp";
import giò from "../img/giò.webp";
import Barra from "./Barra";
import Footer from "./Footer";
function Homepage() {
  return (
    <>
      <Barra />
      <div class="clearfix text-center">
        <img
          src={giò}
          className="col-md-6 float-md-end mb-3 ms-md-3"
          alt="..."
          style={{ width: "40%", height: "40%" }}
        />
        <div className="ms-3 d-flex flex-column align-items-center">
          <h1 className="mt-5 mb-5">MAKE IT EASIER</h1>
          <h3 className="mb-5">Giorgia Burini</h3>
          <h3 className="mb-5">Consulente di immagine e closet organizer</h3>
          <p className="mb-0">
            Consulente di immagine e closet organizer Il mio lavoro esprime la mia più grande passione: aiutare le
            persone a conoscersi attraverso forme e colori per acquisire maggiore consapevolezza e imparare a
            valorizzare la propria bellezza naturale. <br /> Non ti imporrò nessuno stile ma scopriremo insieme quello
            perfetto per te!
          </p>
        </div>
      </div>
      <div>
        <p className="border border-5 border-info p-3 text-center mt-3" style={{ color: "rgb(214,47,255)" }}>
          "Amare se stessi è l'inizio di una storia d'amore che dura tutta la vita" <br /> Oscar Wild
        </p>
      </div>
      <div className="row d-flex flex-row justify-content-center ">
        <Cards
          immagine={armocromia}
          titolo="ARMOCROMIA"
          testo="Ti aiuto a scoprire i colori che più ti valorizzano per l'abbigliamento, capelli, accessori e make-up."
          href="/consulenza-di-armocromia"
        />

        <Cards
          immagine={Organizzazioneguardaroba}
          titolo="ORGANIZZAZIONE DEL GUARDAROBA"
          testo="Ti aiuto ad avere un armadio funzionale pieno di cose da mettere, facendo ordine, e dando nuova vita ai tuoi capi!"
          href="/organizzazione-guardaroba"
        />
        <Cards
          immagine={personalshopper}
          titolo="PERSONAL SHOPPER"
          testo="L'ultimo step della consulenza di immagine. Ti aiuto a creare i tuoi outfit una volta scoperti i tuoi colori e le tue forme."
          href="/personal-shopper"
        />
        <Cards
          immagine={Personalstylingformen}
          titolo="STILE PERSONALE"
          testo="Ti aiuto a scoprire il look perfetto per ogni occasione in base alla forma del tuo corpo, del viso e del tuo stile."
          href="/stile-personale"
        />
      </div>
      <Footer />
    </>
  );
}
export default Homepage;
