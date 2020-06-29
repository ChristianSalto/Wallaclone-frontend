import React, { useState, useEffect } from 'react';
import { Input } from '@material-ui/core';
import NavBar from '../Navbar/Navbar';
import './main.css';

import { getExpress } from '../../services/api';

export default function Main() {
  const [text, setText] = useState('');

  useEffect(() => {
    const text1 = async () => {
      const text = await getExpress();
      console.log(text)
      // console.log(typeof text);
      // setText(text);
    };
    text1();
  });

  return (
    <div className="grid-container">
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <Input />
        <h2>{text}</h2>
      </main>
      <footer className="footer">
        <h2>footer</h2>
      </footer>
    </div>
  );
}
