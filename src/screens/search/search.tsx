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
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  // search
  async function search() {

    // Get request using search to get the ArtistId

    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken,
      },
    };
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        {
          return data.artists.items[0].id;
        }
      });


    // Get request with Artist Id grab all the albums from that artist

    var returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data.items);
      });
    // Display those albums to the user
  }

  return (
    <div className="App" style={{ width: "100%" }}>
      <Container>
        <InputGroup className="mb-3 mt-2" size="lg">
          <FormControl
            placeholder="Search For Artist"
            type="input"
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>

      <Container>
        <Row className="mx-2 row row-cols-5">
          {albums.map((album: any, i: any) =>{
              return (
                <Card className="mb-3 mx-2" style={{ width: "12rem",height: "auto" }}>
                <Card.Img variant="top" src={album?.images[0].url} />
                <Card.Body>
                  <Card.Title>{album?.name}</Card.Title>
                <Card.Text>{album?.artists[0]?.name}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted text-center" style={{overflow: "break-word"}}>
                    Release Date: {album?.release_date}
                  </small>
                </Card.Footer>
              </Card>
              )
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Search;
