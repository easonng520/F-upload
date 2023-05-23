import axios from "axios";

export default axios.create({
  baseURL: "https://bu.easonng520.repl.co",
  headers: {
    "Content-type": "application/json",
  },
});
