import React, { Component } from "react";

class Cardfoto extends Component {
  render() {
    return (
      <div className="d-flex mx-5">
        <div
          className="card rounded-0 border-0 mt-5"
          style={{
            backgroundColor: "rgb(195,219,251)",
            width: "100%",
          }}
        >
          <div className="clearfix text-center">
            <img
              src={this.props.immagine}
              className="col-md-6 float-md-end mb-3 ms-md-3"
              alt="..."
              style={{ width: "30%" }}
            />
            <div className="m-4">
              <h2>{this.props.titolo}</h2>
              <p className="lh-lg mt-3">{this.props.testo}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cardfoto;
