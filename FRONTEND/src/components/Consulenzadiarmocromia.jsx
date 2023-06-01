import Barra from "./Barra";
import consulezaarmo from "../img/consulezaarmo.webp";
import armo from "../img/armo.webp";
import anna from "../img/anna.webp";
import Footer from "./Footer";
import Cardfoto from "./Cardfoto";

function Consulenzadiarmocromia() {
  return (
    <>
      <Barra />

      <img style={{ width: "100%" }} src={consulezaarmo} alt="" />
      <div className="mx-5">
        <h2 className="mt-5 mb-3">ARMOCROMIA DONNA/UOMO </h2>
        <p className="lh-lg">
          Ti sei mai chiesta/o perché quel maglione, quel colore di capelli o quel rossetto che stanno bene ad un'altra
          persona su te non funzionano? <br /> La risposta è Armocromia! <br /> L'Armocromia è una disciplina che
          analizza le caratteristiche cromatiche di ognuno di noi: sottotono, intensità, contrasto, valore e, sulla base
          di queste, definisce la nostra palette di colori ideale per vestiti, accessori, make up e capelli. <br />
          Scoprirai i tuoi “colori amici”, quei colori che hanno il potere di farci apparire più luminosi e riposati,
          minimizzando le discromie. Al contrario, i “colori nemici” enfatizzano ombre e rossori del viso, rendendo la
          nostra pelle più grigia o più giallina. <br /> L’effetto che i colori hanno su di noi è davvero sorprendente,
          provare per credere! <br />
          La consulenza di Armocromia è un vero e proprio investimento che dura per sempre, poiché la nostra palette di
          colori non cambia nel corso del tempo. <br />
          ​ Ho studiato e approfondito tutti i metodi di analisi (metodo 12, 12+4,16,16x4 stagioni) per garantire una
          consulenza quanto più personalizzata che non si ferma, quindi, ad assegnare una stagione o un sottogruppo ma
          cerca l'unicità di ognuno di noi. <br />
          Oltre 200 drappi per scoprire tutte le sfumature adatte a te!
        </p>
      </div>
      <Cardfoto
        immagine={armo}
        titolo="COME FUNZIONA?"
        testo="Non si tratta di un’analisi semplice ma richiede strumenti specifici e tanta tecnica. Viene effettuata
con viso struccato e non abbronzato, in modo tale da capire quali siano i tuoi colori naturali e
riconoscere il potere che questi hanno su di te!  Per definire la palette (o stagione cromatica)
viene analizzato il sottotono della pelle (temperatura: calda/fredda), il valore, l’intensità e il
contrasto tra pelle/occhi/capelli. Analizzeremo la palette nello specifico, ti illustrerò i colori per
il guardaroba, accessori (borse, scarpe, gioielli, occhiali), make up e colorazione di capelli. Vedremo
le fantasie perfette per te e come poter abbinare in maniera impeccabile i colori tra loro!  La
consulenza ha una durata di circa un'ora e trenta/due. La consulenza si fa una sola volta nella vita
quindi ti dedicherò tutto il tempo che serve!"
      />
      <Cardfoto
        immagine={anna}
        titolo="COSA PORTI A CASA"
        testo="- La tua palette armocromatica personalizzata che utilizzerai per tutto il tuo shopping. 
                Nei giorni successivi (entro 2 settimane) ti invierò un report personalizzato su tutto quello che
                abbiamo visto durante la consulenza in modo da poterlo riguardare ogni volta che vorrai!
                Un rapporto duraturo con me! Sarò disponibile per qualsiasi chiarimento o dubbio post consulenza. 
                Guadagnerai tempo e denaro nel tuo shopping, imparando ad acquistare ciò che realmente ti valorizza!
                
                Tantissimi consigli e una maggiore consapevolezza delle tue caratteristiche cromatiche e dei tuoi punti
                di forza che ti permetteranno di valorizzarti al meglio! ​
"
      />
      <Footer />
    </>
  );
}
export default Consulenzadiarmocromia;
