import React, {useState , useEffect} from "react";
import PlantCard from "./PlantCard";


function PlantList({ id, name, image, price, plantList }) {


  


  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;
