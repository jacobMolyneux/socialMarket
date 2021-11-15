import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import EmmaPhoto from "../images/Emma.jpg";
import laurenPhoto from "../images/lauren.jpg";

const InfluencerPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Sarah</h1>
          <p>
            This is an influencer page that will display the influencer
            statistics about their instagram. This section can also display the
            users bio where they can describe them selves. Some of these things
            a person might include in this part could be where they are from,
            what they like to post, who their followers are and more!
          </p>
        </Col>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                src={EmmaPhoto}
                alt="Influncer"
                style={{ width: "20rem", height: "auto" }}
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={laurenPhoto}
                alt="Influencer"
                style={{ width: "20rem", height: "auto" }}
              ></img>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <h1>User Statistics will go here</h1>
      </Row>
    </Container>
  );
};

export { InfluencerPage };
