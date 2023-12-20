import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

function JSONCard() {
  let [jsonData, setJsonData] = useState([]);
  let callData = async () => {
    let jsonFile = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    let jsData = await jsonFile.json();
    console.log(jsData);
    setJsonData(jsData);
  };
  useEffect(() => {
    callData();
  },1);

  return (
    <div className="containerCard">
      {jsonData.map((i) => {
        let imgsrc = i["image"];
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={imgsrc}
              className="responsive-img"
              height={"200px"}
              width={"200px"}
            />
            <Card.Body>
              <Card.Title>{i["title"]}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default JSONCard;
