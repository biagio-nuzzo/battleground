import Style from "./CardTilt.module.css";
import React, { useRef, useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { Col, Row } from "react-bootstrap";
import Divider from "../Divider/Divider";

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
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <React.Fragment>
      <Row>
        <Col xs={12} style={{ position: "relative" }}>
          <div className={Style.settingBarStyle}>
            <input
              type="text"
              placeholder="Cerca Eroi, Carte e Poteri..."
              className={Style.inputStyle}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </Col>
      </Row>

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
          .map((card, index) => {
            return (
              <Col key={index} lg={3} md={4} sm={6} xs={12}>
                <Tilt
                  onClick={() => {
                    const tmp_data = {
                      visibility: "block",
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
                  <img alt="img-hs" className={Style.imgCardTilt} src={card.image} />
                </Tilt>
              </Col>
            );
          })}
      </Row>

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
          .map((card, index) => {
            return (
              <Col key={index} lg={3} md={4} sm={6} xs={12}>
                <Tilt
                  options={options}
                  className={Style.cardContainer}
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    boxShadow: "none",
                    margin: 0,
                  }}
                >
                  <img alt="img-hs" className={Style.imgCardTilt} src={card.image} />
                </Tilt>
              </Col>
            );
          })}
      </Row>

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
          .map((card, index) => {
            return (
              <Col key={index} lg={3} md={4} sm={6} xs={12}>
                <Tilt
                  options={options}
                  className={Style.cardContainer}
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    boxShadow: "none",
                    margin: 0,
                  }}
                >
                  <img alt="img-hs" className={Style.imgCardTilt} src={card.image} />
                </Tilt>
              </Col>
            );
          })}
      </Row>

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
          .map((card, index) => {
            return (
              <Col key={index} lg={3} md={4} sm={6} xs={12}>
                <Tilt
                  options={options}
                  className={Style.cardContainer}
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    boxShadow: "none",
                    margin: 0,
                  }}
                >
                  <img alt="img-hs" className={Style.imgCardTilt} src={card.image} />
                </Tilt>
              </Col>
            );
          })}
      </Row>
    </React.Fragment>
  );
};

export default CardTilt;
