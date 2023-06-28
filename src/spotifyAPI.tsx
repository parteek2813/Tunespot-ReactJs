import axios from "axios";

const options = {
  method: "GET",
  url: "https://spotify23.p.rapidapi.com/search/",
  params: {
    q: "<REQUIRED>",
    type: "multi",
    offset: "0",
    limit: "10",
    numberOfTopResults: "5",
  },
  headers: {
    "X-RapidAPI-Key": "acd75c4490msh8cc928455d6d457p12b772jsn1ca6e135e9e4",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

export default options;
