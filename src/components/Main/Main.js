import React, { useState, useEffect } from "react";
import NavBar from "../Navbar";
import "./main.css";
import Cards from "../Cards";
import Load from "../Load";
import Form from "../Form";
import Input from "../Input";
import ButtonRadio from "../ButtonRadio/ButtonRadio";
import SliderInp from "../SliderInp/SliderInp";

import Icon from "@material-ui/core/Icon";
import { Button } from "@material-ui/core";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";

export default function Main(props) {
  const { loadAds } = props;
  const [ads, setAds] = useState(null);
  const [msj, setMsj] = useState("");
  const [date, setDate] = useState(false);
  const [selectedValue, setSelectedValue] = useState("default");
  const [value, setValueMin] = useState(0);
  // const filter = {};
  let [tags, setTags] = useState("");
  let [price, setPrice] = useState("");
  let [name, setName] = useState("");
  let [filter, setFilter] = useState({ name, tags, price });

  const handleFilter = async (event) => {
    const name = event.name;
    setName(name);
    setFilter((filter = { name, tags, price }));
    const { result, msj } = await loadAds(filter, date);
    setAds(result);
    setMsj(msj);
  };

  const handleFilterTags = async (event) => {
    const tag = event.target.value;
    setTags((tags = tag));
    setFilter((filter = { tags: tag, price: price }));
    setSelectedValue(tag);
  };

  const handleFilterPrice = async (event) => {
    const prices = event.target.value;
    setPrice((price = prices));
    setFilter((filter = { tags: tags, price: prices }));
    setValueMin(price);
  };

  useEffect(() => {
    const get = async () => {
      const { result, msj } = await loadAds(
        { name: "", tags: "", price: "" },
        date
      );
      setAds(result);
      setMsj(msj);
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
          <div className="container-form">
            <SliderInp handleFilterPrice={handleFilterPrice} value={value} />
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
            <ButtonRadio
              handleFilterTags={handleFilterTags}
              selectedValue={selectedValue}
            />
          </div>
        </Form>
        <div className="container-cards">
          {!ads ? <Load /> : <Cards ads={ads} />}
        </div>
        <h1 className="h1-main">{msj}</h1>
      </main>
      <footer className="footer">
        <div className="cntr-footer">
          <div className="cntr-services">
            <h2>Services</h2>
            <ul>
              <li>Web design Madrid</li>
              <li>Graphic design Madrid</li>
              <li>SEO Madrid</li>
            </ul>
          </div>
          <div className="cntr-contacts">
            <h2>Contact</h2>
            <ul>
              <li>C/goya nº23 office 2</li>
              <li>Tfl: 914324363</li>
              <li>wallaclone@gmail.com</li>
            </ul>
          </div>
          <div className="cntr-social">
            <h2>Social networks</h2>
            <a href="https://www.facebook.com/">
              <FacebookIcon size={32} round={true} className="icons" />
            </a>
            <a href="https://twitter.com/">
              <TwitterIcon size={32} round={true} className="icons" />
            </a>
            <a href="https://www.linkedin.com/">
              <LinkedinIcon size={32} round={true} className="icons" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
