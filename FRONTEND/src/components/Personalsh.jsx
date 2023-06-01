import Barra from "./Barra";
import personal from "../img/personal.webp";
import Footer from "./Footer";

function Personalsh() {
  return (
    <>
      <Barra />

      <img style={{ width: "100%" }} src={personal} alt="" />
      <div className="m-5 text-center">
        <h1>PERSONAL SHOPPER</h1>
        <p className="lh-lg m-4">
          L'ultimo step della consulenza di immagine. Ti aiuto a creare i tuoi outfit una volta scoperti i tuoi colori e
          le tue forme. Non è necessario aver fatto una o entrambe le consulenze precedenti ma è fortemente consigliato
          al fine di fare uno shopping mirato e veloce. <br /> ​ Prima dello shopping definiremo il tuo budget e la
          lista acquisti e in base a questo programmiamo insieme il nostro shopping. <br /> ​ Look da giorno o da sera,
          outfit impeccabile per il lavoro o per una cerimonia! Scoprirai che lo shopping con una consulente è veloce,
          mirato ed efficace! <br /> ​ Avrai la possibilità di approfondire nella pratica i colori e i modelli che più
          ti valorizzano e definire insieme a me lo stile che più ti rappresenta! <br /> ​ ANCHE ONLINE!
        </p>
      </div>
      <Footer />
    </>
  );
}
export default Personalsh;
