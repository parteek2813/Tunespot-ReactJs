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
    "X-RapidAPI-Key": "c0ee686d86msh5a20250be5a8e1ep126535jsn0e03929b1137",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

export default options;
