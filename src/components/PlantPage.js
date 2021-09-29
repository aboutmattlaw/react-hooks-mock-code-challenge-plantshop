import React, {useState , useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import PlantCard from "./PlantCard";



function PlantPage() {




  const [plants, setPlants] = useState([])
  const [searchh, setSearchh] = useState("")





  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlants(data))
  },[])
  

  const filterdPlants = plants.filter(plant => plant.name.includes(searchh))

  
  const plantList = filterdPlants.map((plant) => <PlantCard 
  id={plant.id} 
  name={plant.name} 
  image={plant.image}
  price={plant.price}
  />);
  


  // QUANG CHAT
  // function runSearch (search) {
  //   const filterdPlants = []
      
        
  //     );
  // })}



  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search setSearchh={setSearchh}/>
      <PlantList plantList={plantList}/>
    </main>
  );
}

export default PlantPage;
