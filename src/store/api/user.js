import axios from "axios";

export const userEndPoint = () => {
  return axios.get("http://10.0.30.166:8080/private/users/serialize/");
};
