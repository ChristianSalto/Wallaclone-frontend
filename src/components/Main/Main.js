import React, { useState, useEffect } from "react";
import NavBar from "../Navbar";
import Cards from "../Cards";
import Load from "../Load";
import FormMain from "../FormMain";
import Page from "../Page";
import Footer from "../Footer";

import "./main.css";

export default function Main(props) {
  const { getAds, getUi } = props;
  const [ads, setAds] = useState(null);
  const [msj, setMsj] = useState("");
  let [skip, setSkip] = useState(0);

  useEffect(() => {
    const { adverts } = getAds;
    const { msj } = getUi;
    setAds(adverts);
    setMsj(msj);
  }, [getAds, getUi]);



  return (
    <div className="grid-container">
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <FormMain skip={skip} />
        <div className="container-cards">
          {!ads ? <Load /> : <Cards ads={ads} />}
        </div>
        <h1 className="h1-main">{msj}</h1>
        <Page skip={skip} setSkip={setSkip} />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
