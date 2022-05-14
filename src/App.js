import './App.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CardTilt from './Components/CardTilt/CardTilt';
import secrets from "./datas/magic.js";
import heroes from "./datas/heroes.js";
import powers from "./datas/powers.js";
import cards from "./datas/cards.js";
import CardDetailPopup from './Components/CardDetailPopup/CardDetailPopup';

function App() {

  const initializePopup = {
    visibility: "none",
    details: null
  }

  const [cardDetail, setCardDetail] = useState(initializePopup);

  const secretsData = secrets;
  return (

    <React.Fragment>
      {(cardDetail.details) &&
        <CardDetailPopup {...cardDetail} />
      }
      <div className='backgroundImageContainer pt-5'>
        <Container className="main-container-battleground">
          <CardTilt cardDetail={setCardDetail} secrets={secretsData} heroes={heroes} powers={powers} cards={cards} />
        </Container>
      </div>
    </React.Fragment>

  );
}

export default App;
