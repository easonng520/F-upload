import axios from "axios";

export default axios.create({
  baseURL: "https://b-upload.easonng520.repl.co/files",
// baseURL: "https://backend.easonng520.repl.co/api/files",
  
  headers: {
    "Content-type": "application/json",
  },
});
