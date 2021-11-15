import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { UserCard } from "../components/userCard";
import EmmaPhoto from "../images/Emma.jpg";
import LaurenPhoto from "../images/lauren.jpg";
import sarahPhoto from "../images/Sarah.jpg";
import BannerImage from "../images/lauren_two.jpg";

import { useState } from "react";

const Homepage = () => {
  return (
    <Container>
      <h1>Social Market</h1>
      <Image
        style={{ width: "100%", height: "auto" }}
        src={BannerImage}
      ></Image>
      <Container className="d-flex">
        <UserCard image={EmmaPhoto} Name="Emma" />
        <UserCard image={LaurenPhoto} Name="Lauren" />
        <UserCard image={sarahPhoto} Name="Sarah" />
      </Container>
    </Container>
  );
};

export { Homepage };
