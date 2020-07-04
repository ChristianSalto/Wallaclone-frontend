import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import "./main.css";
import Cards from "../Cards";
import Load from "../Load";
import Form from "../Form";
import Input from "../Input";
import ButtonRadio from "../ButtonRadio/ButtonRadio";

import Icon from "@material-ui/core/Icon";
import { Button } from "@material-ui/core";

export default function Main(props) {
  const { loadAds } = props;
  const [ads, setAds] = useState(null);
  const [msj, setMsj] = useState("");
  const [date, setDate] = useState(false);

  const handleFilter = async (filter) => {
    const { ads, msj } = await loadAds(filter.name, date);
    setAds(ads);
    setMsj(msj);
  };

  useEffect(() => {
    const get = async () => {
      const { ads } = await loadAds("", date);
      setAds(ads);
    };
    get();
  }, [loadAds, date]);

  return (
    <div className="grid-container">
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <Form onSubmit={handleFilter} initialValue={{ name: "" }}>
          <Input
            name="name"
            type="text"
            className="inp-search"
            placeholder="search..."
          />
          <Button className="btn-search" type="submit">
            <Icon>search</Icon>
          </Button>
          <Button
            className="btn-date"
            type="button"
            onClick={() => setDate(!date)}
          >
            latest announcements
          </Button>
          <ButtonRadio />
        </Form>

        <div className="container-cards">
          {!ads ? <Load /> : <Cards ads={ads} />}
        </div>
        <h1 className="h1-main">{msj}</h1>
      </main>
      <footer className="footer">
        <h2>footer</h2>
      </footer>
    </div>
  );
}
