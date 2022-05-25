import axios from "axios";

export const API = {
  getUserData: (userName) =>
    axios.get(`https://api.github.com/users/${userName}/repos`),
};
