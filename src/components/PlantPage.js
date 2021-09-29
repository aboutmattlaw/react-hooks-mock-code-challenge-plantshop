import React, {useState , useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import PlantCard from "./PlantCard";



function PlantPage() {




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
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search />
      <PlantList plantList={plantList}/>
    </main>
  );
}

export default PlantPage;
