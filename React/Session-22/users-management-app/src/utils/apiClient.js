import axios from "axios";

export default axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    // "Content-Type": "application/json",
    'app-id': '6315d7b2fd262fa0d52a512d'
  },
});