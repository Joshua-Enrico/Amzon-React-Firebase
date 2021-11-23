import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-ce166.cloudfunctions.net/api" // Api URL 
  // "http://127.0.0.1:5001/clone-ce166/us-central1/api", Localhost
});

export default instance;