import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-c693d.cloudfunctions.net/api",
  //localhost
  // http://localhost:5001/clone-c693d/us-central1/api
});

export default instance;
