import RestaurentCard from "./RestaurentCard";
import resList from "../Utils/mockData"
import { useState,useEffect } from "react";


const Body = () => {
  
  const[ListOfRestaurants , setListOfRestaurants] = useState(resList);

useEffect(()=>{
  fetchData();
},[]);

const fetchData = async() =>{
  const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");


  const json = await data.json();
  console.log(json);
  setListOfRestaurants(json?.data?.cards[5]?.card?.card?.info
    );
}
  

    return (
      <div className="body">
        <div className="search">
           <input
            type="search"
            className="input"
            placeholder="search restaurents here..."
          /> 
          <button className="search-btn" >Search</button>
          </div>

          <div className= "filter">

          <button  className="filter-btn" onClick={()=>{

            const filteredList = ListOfRestaurants.filter(
              (res) => res.data.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            
            
          }}
          >
            Top Rated Restaurent</button>

        </div>
        <div className="res-card">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurentCard rescard={restaurant} key={restaurant.data.id} />
        ))}
      </div>
     
      </div>
    );
  };
  export default Body;