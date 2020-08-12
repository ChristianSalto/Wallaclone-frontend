import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import NavBar from "../Navbar";
import "./main.css";
import Cards from "../Cards";
import Load from "../Load";
import Form from "../Form";
import Input from "../Input";
import ButtonRadio from "../ButtonRadio/ButtonRadio";
import SliderInp from "../SliderInp/SliderInp";

// import Icon from "@material-ui/core/Icon";
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
  let [skip, setSkip] = useState(0);
  let [filter, setFilter] = useState({ name, tags, price, skip });

  const handleFilter = async (event) => {
    const name = event.name;
    console.log("estoy aqui", name)
    setName(name);
    setFilter((filter = { name, tags, price, skip }));
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
        { name: "", tags: "", price: "", skip },
        date
      );
      setAds(result);
      setMsj(msj);
    };
    get();
  }, [loadAds, date, skip]);


  return (
    <div className="grid-container">
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <Form onSubmit={handleFilter} initialValue={{ name }}>
          <div className="container-form">
            <div className="cntr-btn-inp">
              <ButtonRadio
                handleFilterTags={handleFilterTags}
                selectedValue={selectedValue}
              />
              <Button className="btn-search" type="submit">
                search
              </Button>
              <div>
                <Input
                  name="name"
                  type="text"
                  className="inp-search"
                  placeholder="search..."
                />
              </div>
            </div>
            <div className="cntr-slide-btn">
              <Button
                className="btn-date"
                type="button"
                onClick={() => setDate(!date)}
              >
                <h4>latest announcements</h4>
              </Button>
              <Link to="/listuser" className="lnk-user-list">
                <h4>USER LIST</h4>
              </Link>
              {/* <Button
                className="btn-list-user"
                onClick={() => props.history.push("/listuser")}
              >
                User list
            </Button> */}
              <SliderInp handleFilterPrice={handleFilterPrice} value={value} />
            </div>
          </div>
        </Form>
        <div className="container-cards">
          {!ads ? <Load /> : <Cards ads={ads} />}
        </div>
        <h1 className="h1-main">{msj}</h1>
        <div className="cntr-page">
          <Button onClick={() => setSkip(skip - 1)}>
            <h2>&#9668;</h2>
          </Button>
          <h2>{skip < 0 ? setSkip((skip = 0)) : skip}</h2>
          <Button onClick={() => setSkip(skip + 1)}>
            <h2>&#9658;</h2>
          </Button>
        </div>
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
