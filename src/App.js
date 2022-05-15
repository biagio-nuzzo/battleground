import './App.css';
import React, { useState, useEffect } from 'react';
import CardTilt from './Components/CardTilt/CardTilt';
import secrets from "./datas/magic.js";
import heroes from "./datas/heroes.js";
import powers from "./datas/powers.js";
import cards from "./datas/cards.js";
import CardDetailPopup from './Components/CardDetailPopup/CardDetailPopup';
import Loader from './Components/Loader/Loader';
import HeroSection from './Components/HeroSection/HeroSection';
import Footer from './Components/Footer/Footer';

function App() {
  const initializePopup = {
    visibility: "none",
    details: null
  }

  const [cardDetail, setCardDetail] = useState(initializePopup);
  const [loader, setLoader] = useState("block");

  useEffect(() => {
    setTimeout(() => setLoader("none"), 3000);
  }, []);


  return (

    <React.Fragment>
      {(cardDetail.details) &&
        <CardDetailPopup popupVisibility={setCardDetail} {...cardDetail} />
      }

      <Loader loader={loader} />

      <div className='backgroundImageContainer'>
        <HeroSection />
        <div className="main-container-battleground">
          <CardTilt cardDetail={setCardDetail} secrets={secrets} heroes={heroes} powers={powers} cards={cards} />
        </div>
      </div>

      <Footer />
    </React.Fragment>

  );
}

export default App;
