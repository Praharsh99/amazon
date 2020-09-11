import axios from "axios";

const instance = axios.create({
  baseURL: "https://obscure-taiga-92144.herokuapp.com",
});

export default instance;
