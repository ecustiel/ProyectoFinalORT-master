import axios from "axios";

const registerPub = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default registerPub;
