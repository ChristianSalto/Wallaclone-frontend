import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import Load from "../Load";

import { Link } from "react-router-dom";
import { Button, Icon } from "@material-ui/core";

import "./cart.css";

const Cart = (props) => {
  const { getCart, getStateAds, getStateUser, getStateUi, removeCart } = props;
  const { user } = getStateUser;
  const { adverts } = getStateAds;
  const ui = getStateUi;
  const { username, token } = user;
  const [load, setLoad] = useState(false);

  const handleRemoveCart = async () => {
    await removeCart(username, token);
  };

  useEffect(() => {
    setLoad(true);
  }, []);

  useEffect(() => {
    const getMyCart = async () => {
      await getCart(username, token);
    };
    getMyCart();
  }, [getCart, username, token]);

  return (
    <>
      <div className="cntr-header-cart">
        <h1>Cart of {username}</h1>
      </div>
      <div className="cntr-cart">
        {!load ? <Load /> : <Cards ads={adverts} />}
        <h1>{ui.msj}</h1>
      </div>
      <div className="cntr-back-cart">
        <Link to="/" className="link-back">
          <Button>
            <h1>&#9668;</h1>back
          </Button>
        </Link>
        <Button className="btn-dlt-cart" onClick={() => handleRemoveCart()}>
          Empty cart
          <Icon>delete</Icon>
        </Button>
      </div>
    </>
  );
};

export default Cart;
