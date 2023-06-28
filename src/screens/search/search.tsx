import React, { useState, useEffect } from "react";
import "./search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";

const CLIENT_ID = "7b77042430384ad781ff84dd1bf4b7f0";
const CLIENT_SECRET = "6a5b0b36582e4df5896ef02a55fe3144";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters);
  }, []);

  return (
    <div className="App" style={{ width: "100%" }}>
      <Container>
        <InputGroup className="mb-3 mt-2" size="lg">
          <FormControl
            placeholder="Search For Artist"
            type="input"
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                console.log("Pressed Enter");
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={() => console.log("Clicked Button")}>Search</Button>
        </InputGroup>
      </Container>

      <Container>
        <Row className="mx-2 row row-cols-4">
          <Card>
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
