import emailjs from "emailjs-com";
import React from "react";

function sendEmail() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_capstone", "template_cap", e.target, "oVtFsS2QrD5N-LDNp").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Il tuo nome" name="nome" required />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="email" className="form-control" placeholder="La tua email" name="email" required />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="text" className="form-control" placeholder="Oggetto" name="oggetto" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Il tuo messaggio"
                name="messaggio"
                required
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input type="submit" className="btn btn-info " value="Send Message"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default sendEmail;
