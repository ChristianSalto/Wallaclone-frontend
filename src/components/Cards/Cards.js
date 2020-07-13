import React from "react";
import { Card } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";

import "./cards.css";

const Cards = (props) => {
  const { ads, getAdsById } = props;
  const URL = `http://localhost:3000/img/`;
  const handleDetails = (id) => {
    getAdsById(id);
  };

  return (
    <>
      {ads.map((card) => (
        <div key={card._id}>
          <Card className="cards" onClick={() => handleDetails(card._id)}>
            <Card.Img
              variant="top"
              src={URL + card.img}
              className="img-cards"
            />
            <Card.Body className="cards-body">
              <Card.Title className="c-title">{card.name}</Card.Title>
              <Card.Text className="c-descri">{card.description}</Card.Text>
              <Card.Text className="c-tags">
                {card.tags.map((tag) => " " + tag)}
              </Card.Text>
              <Card.Text className="c-autor">
                <Icon>create</Icon>
                <span className="sp-autor">{card.autor}</span>
              </Card.Text>
              <Card.Text className="c-date">
                <Icon>update</Icon>{" "}
                <span className="sp-date">
                  {new Date(card.date).toLocaleDateString()}
                </span>
              </Card.Text>
              <div className="container-sts-pri">
                <div className="container-price">
                  <Card.Text>{card.price} $</Card.Text>
                </div>
                <div>
                  <Card.Text>{card.status}</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default Cards;
