import React from "react";
import { Card, Button } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";

import "./cards.css";

const Cards = (props) => {
  return (
    <Card className="cards">
      <Card.Img variant="top" src="img/ps5.jpg" className="img-cards" />
      <Card.Body className="cards-body">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>kdjfhlskdjfshg</Card.Text>
        <Card.Text>
          Some quick example
          temhghmg,jhgljhgkjhgkjhgkjákdkjjflḱadfjljñdflkjgñalkfjxt to build on
          the card title and make up the bulk of the card's content.
        </Card.Text>

        <Card.Text>
          jdgfakjd@ñkdfjhkffffffffffffffffffffffff
          fffffsssssssssssssssssssssssssssssssllkjlkñlkjñlkjñlkjñljkñlkjlkj
        </Card.Text>
        <div className="container-star">
          <div className="container-price">
            <Card.Text>50000000000 $</Card.Text>
          </div>
          <div>
            <Icon style={{ color: "yellow" }}>star</Icon>
            <Icon style={{ color: "yellow" }}>star</Icon>
            <Icon style={{ color: "yellow" }}>star</Icon>
            <Icon style={{ color: "yellow" }}>star</Icon>
            <Icon style={{ color: "yellow" }}>star</Icon>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
