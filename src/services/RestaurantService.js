import vegandorApi from "./VegandorService";
import axios from "axios";

// import request from "./request";
// import API_URL from "../config";

//import { IRestaurantRequest } from "../Models/types";

export const getAllRestaurants = async () => {

 /*    const response = await axios.get(`products`); //<IRestaurantRequest>
    return response.data; */


  let res = await vegandorApi.get('restaurants');

  let data = res.data;
  return data

};
