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
  const [stars, setStars] = useState([])

  return (
    <React.Fragment>
      <Row className={Style.settingBarStyle} style={{ position: "relative" }}>
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
                  <button className={Style.starButton}>
                    <h4 className={Style.starButtonText}>1</h4>
                  </button>
                  <button className={Style.starButton}>
                    <h4 className={Style.starButtonText}>2</h4>
                  </button>
                  <button className={Style.starButton}>
                    <h4 className={Style.starButtonText}>3</h4>
                  </button>
                  <button className={Style.starButton}>
                    <h4 className={Style.starButtonText}>4</h4>
                  </button>
                  <button className={Style.starButton}>
                    <h4 className={Style.starButtonText}>5</h4>
                  </button>
                  <button className={Style.starButton}>
                    <h4 className={Style.starButtonText}>6</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className={Style.cardGridContainer}>
        <Divider title={"Eroi"} />
        {props.heroes.heroes
          .filter((val) => {
            if (searchTerm === "") {
              tmpHeroesArray.push(val);
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
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

      <Row className={Style.cardGridContainer}>
        <Divider title={"Poteri"} />
        {props.powers.powers
          .filter((val) => {
            if (searchTerm === "") {
              tmpPowersArray.push(val);
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
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

      <Row className={Style.cardGridContainer}>
        <Divider title={"Carte"} />
        {props.cards.cards
          .filter((val) => {
            if (searchTerm === "") {
              tmpCardsArray.push(val);
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
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

      <Row className={Style.cardGridContainer}>
        <Divider title={"Segreti"} />
        {props.secrets.secrets
          .filter((val) => {
            if (searchTerm === "") {
              tmpSecretsArray.push(val);
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
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
