import makeiteasier from "../img/makeiteasier.png";

function Footer() {
  return (
    <>
      <div className=" mt-5 d-flex flex-column align-items-center" style={{ backgroundColor: "rgb(195,219,251)" }}>
        <h2 className="mt-4" style={{ color: "rgb(214,47,255)" }}>
          PRENOTA UNA CONSULENZA
        </h2>
        <a href="/contatti" className="mb-5 mt-3" style={{ fontSize: "25px" }}>
          CONTATTI
        </a>

        <p style={{ fontSize: "20px" }}> SCOPRI LA TUA IMMAGINE MIGLIORE!</p>
        <img className="mb-2" src={makeiteasier} alt="" style={{ height: "60px" }} />
      </div>
    </>
  );
}
export default Footer;
