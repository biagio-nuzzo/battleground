import Style from "./CardTilt.module.css";
import React, { useRef, useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { Col, Row } from "react-bootstrap";
import Divider from "../Divider/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const options = {
  scale: 1.15,
  speed: 1400,
  max: 25,
};

const CardTilt = (props) => {
  function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
  }

  var tmpHeroesArray = [];
  var tmpCardsArray = [];
  var tmpPowersArray = [];
  var tmpSecretsArray = [];

  const [searchTerm, setSearchTerm] = useState("");
  const [stars, setStars] = useState([]);

  const [starOne, setStarOne] = useState(false);
  const [starTwo, setStarTwo] = useState(false);
  const [starThree, setStarThree] = useState(false);
  const [starFour, setStarFour] = useState(false);
  const [starFive, setStarFive] = useState(false);
  const [starSix, setStarSix] = useState(false);

  const [scrollFromTop, setscrollFromTop] = useState(false);
  const [fixedBar, setFixedBar] = useState(false);

  const changeTransform = () => {
    setscrollFromTop(window.scrollY);

    if (scrollFromTop > 490) {
      setFixedBar(true);
    } else {
      setFixedBar(false);
    }
  };

  window.addEventListener("scroll", changeTransform);

  return (
    <React.Fragment>
      {/* Filters Menu */}
      <Row 
      className={Style.settingBarStyle} 
      style={{ position: (fixedBar === true) ? "fixed" : "relative"}}
    
      >
        <Col sm={4}>
          <div style={{ width: "323px" }}>
            <div className={Style.divInternalOne}>
              <div className={Style.divInternalTwo}>
                <div className={Style.divInternalThree}>
                  <input
                    type="text"
                    className={Style.inputStyle}
                    placeholder="Cerca Eroi, Carte e Poteri..."
                    onChange={(event) => {
                      tmpHeroesArray = [];
                      setSearchTerm(event.target.value);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{
                      color: "gold",
                      fontSize: 20,
                      fontWeight: 200,
                      transform: "rotateY(180deg)",
                      marginLeft: "3px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div style={{ width: "224px" }}>
            <div className={Style.divInternalOne}>
              <div className={Style.divInternalTwo}>
                <div className={Style.divInternalThree}>
                  <button
                    onClick={() => {
                      if (starOne === false) {
                        setStarOne(true);
                        const tmpList = stars;
                        tmpList.push(1);
                        setStars(tmpList);
                      } else {
                        const tmpList = stars;
                        const index = tmpList.indexOf(1);
                        tmpList.splice(index, 1);
                        setStars(tmpList);
                        setStarOne(false);
                      }
                    }}
                    className={
                      starOne === false
                        ? Style.starButton
                        : Style.starButton + " " + Style.startButtonSelected
                    }
                  >
                    <h4 className={Style.starButtonText}>1</h4>
                  </button>
                  <button
                    onClick={() => {
                      if (starTwo === false) {
                        setStarTwo(true);
                        const tmpList = stars;
                        tmpList.push(2);
                        setStars(tmpList);
                      } else {
                        const tmpList = stars;
                        const index = tmpList.indexOf(2);
                        tmpList.splice(index, 1);
                        setStars(tmpList);
                        setStarTwo(false);
                      }
                    }}
                    className={
                      starTwo === false
                        ? Style.starButton
                        : Style.starButton + " " + Style.startButtonSelected
                    }
                  >
                    <h4 className={Style.starButtonText}>2</h4>
                  </button>
                  <button
                    onClick={() => {
                      if (starThree === false) {
                        setStarThree(true);
                        const tmpList = stars;
                        tmpList.push(3);
                        setStars(tmpList);
                      } else {
                        const tmpList = stars;
                        const index = tmpList.indexOf(3);
                        tmpList.splice(index, 1);
                        setStars(tmpList);
                        setStarThree(false);
                      }
                    }}
                    className={
                      starThree === false
                        ? Style.starButton
                        : Style.starButton + " " + Style.startButtonSelected
                    }
                  >
                    <h4 className={Style.starButtonText}>3</h4>
                  </button>
                  <button
                    onClick={() => {
                      if (starFour === false) {
                        setStarFour(true);
                        const tmpList = stars;
                        tmpList.push(4);
                        setStars(tmpList);
                      } else {
                        const tmpList = stars;
                        const index = tmpList.indexOf(4);
                        tmpList.splice(index, 1);
                        setStars(tmpList);
                        setStarFour(false);
                      }
                    }}
                    className={
                      starFour === false
                        ? Style.starButton
                        : Style.starButton + " " + Style.startButtonSelected
                    }
                  >
                    <h4 className={Style.starButtonText}>4</h4>
                  </button>
                  <button
                    onClick={() => {
                      if (starFive === false) {
                        setStarFive(true);
                        const tmpList = stars;
                        tmpList.push(5);
                        setStars(tmpList);
                      } else {
                        const tmpList = stars;
                        const index = tmpList.indexOf(5);
                        tmpList.splice(index, 1);
                        setStars(tmpList);
                        setStarFive(false);
                      }
                    }}
                    className={
                      starFive === false
                        ? Style.starButton
                        : Style.starButton + " " + Style.startButtonSelected
                    }
                  >
                    <h4 className={Style.starButtonText}>5</h4>
                  </button>
                  <button
                    onClick={() => {
                      if (starSix === false) {
                        setStarSix(true);
                        const tmpList = stars;
                        tmpList.push(6);
                        setStars(tmpList);
                      } else {
                        const tmpList = stars;
                        const index = tmpList.indexOf(6);
                        tmpList.splice(index, 1);
                        setStars(tmpList);
                        setStarSix(false);
                      }
                    }}
                    className={
                      starSix === false
                        ? Style.starButton
                        : Style.starButton + " " + Style.startButtonSelected
                    }
                  >
                    <h4 className={Style.starButtonText}>6</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <div style={{ height: (fixedBar === true) ? "112px" : "20px"}}></div>

      {/* Cards */}
      <Row className={Style.cardGridContainer}>
        <Divider title={"Carte"} />
        {props.cards.cards
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
            return null;
          })
          .filter((val) => {
            if (stars.length === 0) {
              tmpCardsArray.push(val);
              return val;
            } else if (stars.includes(val.battlegrounds.tier)) {
              tmpCardsArray.push(val);
              return val;
            }
            return null;
          })
          .map((card, index) => {
            return (
              <Col key={index} lg={2} md={4} sm={6} xs={12}>
                <Tilt
                  onClick={() => {
                    const tmp_data = {
                      visibility: "flex",
                      details: card,
                    };
                    props.cardDetail(tmp_data);
                  }}
                  options={options}
                  className={Style.cardContainer}
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    boxShadow: "none",
                    margin: 0,
                  }}
                >
                  <img
                    alt="img-hs"
                    className={Style.imgCardTilt}
                    src={
                      card.battlegrounds.image
                        ? card.battlegrounds.image
                        : card.image
                    }
                  />
                </Tilt>
              </Col>
            );
          })}
        {tmpCardsArray.length === 0 && (
          <Row className={Style.noResultContainer}>
            <Col xs={12}>
              <div className={Style.dividerNoResultImage}></div>
              <div className={Style.dividerNoResult}></div>
              <div className={Style.dividerNoResultMessage}>
                <h5 style={{ fontSize: "22px" }}>Nessuna Carta trovata</h5>
                <p>
                  Prova a rimuovere dei filtri per ottenere risultati migliori
                </p>
              </div>
            </Col>
          </Row>
        )}
      </Row>
      {/* Heroes */}
      <Row className={Style.cardGridContainer}>
        <Divider title={"Eroi"} />
        {props.heroes.heroes
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
            return null;
          })
          .filter((val) => {
            if (stars.length === 0) {
              tmpHeroesArray.push(val);
              return val;
            } else if (stars.includes(val.battlegrounds.tier)) {
              tmpHeroesArray.push(val);
              return val;
            }
            return null;
          })
          .map((heroe, index) => {
            return (
              <Col key={index} lg={2} md={3} sm={6} xs={12}>
                <Tilt
                  onClick={() => {
                    const tmp_data = {
                      visibility: "flex",
                      details: heroe,
                    };
                    props.cardDetail(tmp_data);
                  }}
                  options={options}
                  className={Style.cardContainer}
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    boxShadow: "none",
                    margin: 0,
                  }}
                >
                  <img
                    alt="img-hs"
                    className={Style.imgCardTilt}
                    src={heroe.image}
                  />
                </Tilt>
              </Col>
            );
          })}
        {tmpHeroesArray.length === 0 && (
          <Row className={Style.noResultContainer}>
            <Col xs={12}>
              <div className={Style.dividerNoResultImage}></div>
              <div className={Style.dividerNoResult}></div>
              <div className={Style.dividerNoResultMessage}>
                <h5 style={{ fontSize: "22px" }}>Nessuna Eroe trovato</h5>
                <p>
                  Prova a rimuovere dei filtri per ottenere risultati migliori
                </p>
              </div>
            </Col>
          </Row>
        )}
      </Row>
      {/* Powers */}
      <Row className={Style.cardGridContainer}>
        <Divider title={"Poteri"} />
        {props.powers.powers
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
            return null;
          })
          .filter((val) => {
            if (stars.length === 0) {
              tmpPowersArray.push(val);
              return val;
            } else if (stars.includes(val.battlegrounds.tier)) {
              tmpPowersArray.push(val);
              return val;
            }
            return null;
          })
          .map((power, index) => {
            return (
              <Col key={index} lg={2} md={4} sm={6} xs={12}>
                <Tilt
                  onClick={() => {
                    const tmp_data = {
                      visibility: "flex",
                      details: power,
                    };
                    props.cardDetail(tmp_data);
                  }}
                  options={options}
                  className={Style.cardContainer}
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    boxShadow: "none",
                    margin: 0,
                  }}
                >
                  <img
                    alt="img-hs"
                    className={Style.imgCardTilt}
                    src={power.image}
                  />
                </Tilt>
              </Col>
            );
          })}
        {tmpPowersArray.length === 0 && (
          <Row className={Style.noResultContainer}>
            <Col xs={12}>
              <div className={Style.dividerNoResultImage}></div>
              <div className={Style.dividerNoResult}></div>
              <div className={Style.dividerNoResultMessage}>
                <h5 style={{ fontSize: "22px" }}>Nessun Potere trovato</h5>
                <p>
                  Prova a rimuovere dei filtri per ottenere risultati migliori
                </p>
              </div>
            </Col>
          </Row>
        )}
      </Row>
      {/* Secrets */}
      <Row className={Style.cardGridContainer}>
        <Divider title={"Segreti"} />
        {props.secrets.secrets
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
            return null;
          })
          .filter((val) => {
            if (stars.length === 0) {
              tmpSecretsArray.push(val);
              return val;
            } else if (stars.includes(val.battlegrounds.tier)) {
              tmpSecretsArray.push(val);
              return val;
            }
            return null;
          })
          .map((secret, index) => {
            return (
              <Col key={index} lg={2} md={4} sm={6} xs={12}>
                <Tilt
                  onClick={() => {
                    const tmp_data = {
                      visibility: "flex",
                      details: secret,
                    };
                    props.cardDetail(tmp_data);
                  }}
                  options={options}
                  className={Style.cardContainer}
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    boxShadow: "none",
                    margin: 0,
                  }}
                >
                  <img
                    alt="img-hs"
                    className={Style.imgCardTilt}
                    src={secret.image}
                  />
                </Tilt>
              </Col>
            );
          })}
        {tmpSecretsArray.length === 0 && (
          <Row className={Style.noResultContainer}>
            <Col xs={12}>
              <div className={Style.dividerNoResultImage}></div>
              <div className={Style.dividerNoResult}></div>
              <div className={Style.dividerNoResultMessage}>
                <h5 style={{ fontSize: "22px" }}>Nessun Segreto trovato</h5>
                <p>
                  Prova a rimuovere dei filtri per ottenere risultati migliori
                </p>
              </div>
            </Col>
          </Row>
        )}
      </Row>
    </React.Fragment>
  );
};

export default CardTilt;
