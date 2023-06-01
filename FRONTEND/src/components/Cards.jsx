import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Cards extends Component {
  render() {
    return (
      <Card className="mt-4 ms-2 border-0" style={{ width: "18rem", height: "31rem" }}>
        <Card.Img className="rounded-circle" variant="top" src={this.props.immagine} />
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title className="text-center">{this.props.titolo}</Card.Title>
          <Card.Text className="text-center">{this.props.testo}</Card.Text>
          <Button href={this.props.href} className="position-absolute bottom-0" variant="primary">
            Scopri di più
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default Cards;
