// components/Repositories.jsx
 
import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
 
import { getAllRestaurants } from "../services/RestaurantService";

 
export default function Repositories() {
 
  const { data: restaurantsData, isLoading: isLoadingRestaurants } = useQuery(
    ["restaurants"],
    () => getAllRestaurants()
  );
  if (isLoadingRestaurants) {
     console.log("Loading");
    // <FullScreenLoader />;
  }

  // const restaurants = isLoadingRestaurants ? [] : Object.keys(restaurantsData);
  const restaurants = isLoadingRestaurants ? [] : restaurantsData;

  useEffect(() => {
    console.log("useEffect is working in restaurants");
  }, []);

 
  
  console.log(restaurants)
 
    return (
      <>
        {restaurants.map(res => {
          return (
            <Fragment
              key={res.id}
            >
              <ul>
                <li>
                  
                    {res.name}
               
                </li>
              </ul>
            </Fragment>
          )
        })}
       {/*  <button type="button" onClick={refetch}>
          Fetch again
        </button> */}
      </>
    );
  };