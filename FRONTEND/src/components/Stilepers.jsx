import Barra from "./Barra";
import Footer from "./Footer";
import Cardfoto from "./Cardfoto";
import stilepersonale from "../img/stilepersonale.webp";
import conoscerai from "../img/conoscerai.webp";
function Stilepers() {
  return (
    <>
      <Barra />

      <div className="m-5 text-center">
        <h1>CONSULENZA STILE PERSONALE</h1>
        <p className="lh-lg m-5">
          La consulenza di Stile personale dà i giusti strumenti per imparare ad esprimere noi stessi attraverso
          l'abbigliamento. Cosa indossiamo e come lo indossiamo sono il nostro bigliettino da visita, è importante che
          rispecchino la nostra personalità e i nostri lineamenti. <br /> <br /> ​ Pensate che un decimo di secondo è il
          tempo che impieghiamo a farci un’idea di una persona e formulare un giudizio di massima.
        </p>
        <Cardfoto
          immagine={stilepersonale}
          titolo="COM'È STRUTTURATA"
          testo="La consulenza Stile va a studiare la nostra fisionomia e la nostra personalità, non si tratta, dunque, di assegnare dei look in maniera passiva.
        Ho deciso di sviluppare questa consulenza in vari step. Come primo ti darò un questionario da compilare, delle foto di look da salvare (su Google, Pinterest o riviste di giornale) e ti chiederò di inviarmi delle foto del tuo viso e del tuo corpo. Andrò ad analizzare il vostro impatto in base ai lineamenti, forma di occhi, naso, labbra e forma del corpo per capire cosa esprime il nostro corpo e quali sono le linee che più ci valorizzano. Faremo una prima call che mi servirà per conoscerti meglio, comunicazione verbale e non verbale e ti presenterò un resoconto molto personalizzato. Fisseremo un secondo appuntamento dove terminerò e ti presenterò il report finale.
        Consiglio questa consulenza come step finale dopo Armocromia, Forme del viso e del corpo in modo che io possa consigliarti al meglio, andando ad unire ciò che ti valorizza e ciò che ti rappresenta.
       Il report definitivo ti arriverà entro 2 settimane."
        />
        <Cardfoto
          immagine={conoscerai}
          titolo="CONOSCERAI..."
          testo="- Gli outfit che esprimono al meglio te stessa,

- Come abbinare i vari capi,

- Come abbinare gli accessori, elemento fondamentale dello stile,

- La tua palette cromatica, in base allo stile e, se effettuata, in base all'Armocromia,

- Come abbinare i colori,

- Beauty: trucco,

- Capelli: taglio, styling e acconciature che ti si addicono.

​

Avrai tutti gli strumenti per poter imparare, col tempo, a parlare di te tramite il tuo abbigliamento.

​

La consulenza di stile si svolge in videochiamata su Google Meet o Zoom."
        />
      </div>
      <Footer />
    </>
  );
}
export default Stilepers;
