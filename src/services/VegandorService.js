import axios from "axios";
// import { LoginInput } from "../pages/login.page";
// import { RegisterInput } from "../pages/register.page";
// import { GenericResponse, ILoginResponse, IUserResponse } from "./types";

const BASE_URL = "https://dummyjson.com/";

const vegandorApi = axios.create({
  baseURL: BASE_URL,

});

//vegandorApi.defaults.headers.common["accept"] = "application/json";

export default vegandorApi;