import React, {useState , useEffect} from "react";
import PlantCard from "./PlantCard";


function PlantList() {


  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlants(data))
  },[])
  
  
  const plantList = plants.map((plant) => <PlantCard 
  id={plant.id} 
  name={plant.name} 
  image={plant.image}
  price={plant.price}
  />);
  
  


  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;
