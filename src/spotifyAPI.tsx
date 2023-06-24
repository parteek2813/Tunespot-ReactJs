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
    "X-RapidAPI-Key": "6a9ca95edbmsh3413ee45a57fd81p136c11jsn11ea69dde3a6",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

export default options;
