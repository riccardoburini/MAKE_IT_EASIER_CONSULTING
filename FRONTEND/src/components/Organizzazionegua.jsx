import Barra from "./Barra";
import Footer from "./Footer";
import organizzazione from "../img/organizazzione.webp";
import comefunziona from "../img/comefunziona.webp";
import cosatioffre from "../img/cosatioffre.webp";
import Cardfoto from "./Cardfoto";

function Organizzazionegua() {
  return (
    <>
      <Barra />

      <img style={{ width: "100%" }} src={organizzazione} alt="" />
      <div className="m-5 text-center">
        <h1>ORGANIZZAZIONE GUARDAROBA</h1>
        <p className="lh-lg m-4">
          Quante volte ti è capitato di dire "non ho niente da mettermi!". <br /> Spesso abbiamo un guardaroba pieno di
          vestiti ma la sensazione è quella di non avere niente, questo perché l'armadio non è ben organizzato o
          acquisti capi che non ti valorizzano per forma/colore! <br />
          Con questo servizio ti aiuterò ad organizzare in modo funzionale gli spazi nel tuo armadio in modo tale da
          avere tutti i vestiti ben divisi e a portata di mano. <br /> Ti assicuro che con un armadio ben organizzato e
          strutturato mantenere l'ordine sarà un gioco da ragazzi! <br /> Consiglio sempre questo servizio dopo la
          consulenza di Armocromia e Body Shape in modo tale che io possa consigliarti outfit e abbinamenti
          personalizzati sulla base della tua palette di colori, sui modelli perfetti per la tua fisicità e soprattutto
          in base al tuo stile (il servizio è comunque disponibile per chi non abbia effettuato le consulenze).
        </p>
      </div>
      <Cardfoto
        immagine={comefunziona}
        titolo="COME FUNZIONA"
        testo="
COME FUNZIONA

Per prima cosa andremo a selezionare i capi da tenere e quelli da scartare o da modificare. Poi divideremo gli abiti per tipologia e colore. Considerando il tuo armadio ti darò consigli su come organizzarlo, come piegare i capi e come recuperare spazio in caso di necessità!
Infine andremo a stilare una shopping list per integrare eventuali capi che ti mancano.

Prima dell’appuntamento faremo una videochiamata GRATUITA così da farmi vedere il tuo armadio e ascoltare tutte le tue esigenze, successivamente ti farò un preventivo e sarai libera/o di decidere!"
      />
      <Cardfoto
        immagine={cosatioffre}
        titolo="COSA TI OFFRE"
        testo="
        È un vero investimento che ti permetterà di avere sempre un guardaroba ben organizzato, in linea con i tuoi gusti e, inoltre, imparerei a fare shopping in modo più consapevole acquistando solo ciò che ti serve.
        
        Non penserai più di avere un guardaroba pieno di vestiti ma senza nulla da mettere!!"
      />
      <Footer />
    </>
  );
}
export default Organizzazionegua;
