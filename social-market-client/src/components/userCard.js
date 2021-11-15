import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const UserCard = (props) => {
  let [description, setDescription] = useState(
    "This is an influencer that is using the platfrom. They are super cool and have awesome photos"
  );
  return (
    <Card style={{ width: "18rem" }} className="p-3 m-3">
      <Card.Title>{props.Name}</Card.Title>
      <Card.Img
        variant="top"
        src={props.image}
        style={{ height: "20rem", width: "auto" }}
        className="border-bottom"
      ></Card.Img>

      <Card.Text>{description}</Card.Text>
      <Button>See More</Button>
    </Card>
  );
};
export { UserCard };
