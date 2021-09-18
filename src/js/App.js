import React, { useState } from "react";

import '../css/App.css';
import '../css/Day.css';
import '../css/Popup.css';
import '../css/NextFiveDays.css'

import Day from './Day';
import Popup from './Popup';
import NextFiveDays from './NextFiveDays';

function App() {
  const [button, setButton] = useState(true);
  const [city, setCity] = useState(0);

  function handleBtn() {
    setButton(!button);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setButton(false);
  }

  return (
    <div className="App">
      <Day/>
      <Popup 
        button={button}
        setButton={setButton}
        city={city}
        setCity={setCity}
        handleBtn={handleBtn}
        handleSubmit={handleSubmit}
      />
      <NextFiveDays />
    </div>
  );
}

export default App;
