import axios from "axios";
// import { LoginInput } from "../pages/login.page";
// import { RegisterInput } from "../pages/register.page";
// import { GenericResponse, ILoginResponse, IUserResponse } from "./types";

//const BASE_URL = "https://dummyjson.com/";
const BASE_URL = "http://vriendly.custs.getc0.de/api/"
const vegandorApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

//vegandorApi.defaults.headers.common["accept"] = "application/json";

export default vegandorApi;