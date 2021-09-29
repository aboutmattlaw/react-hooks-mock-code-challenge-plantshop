import React, {useState , useEffect} from "react";


function NewPlantForm() {


  const [nameField, setNameField] = useState("")
  const [imageField, setImageField] = useState("")
  const [priceField, setPriceField] = useState("")
  
  
  function handleNameChange (e){
   setNameField(e.target.value)
  }
  function handleImageChange (e){
    setImageField(e.target.value)
  }
  
  function handlePriceChange(e){
    setPriceField(e.target.value)
  }
  
  function handleSubmitForm(e){
    e.preventDefault()
    const formSubmission = {
      name:nameField,
      image:imageField,
      price:priceField,
    }
    console.log(formSubmission)

    fetch('http://localhost:6001/plants', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formSubmission)
  })
  .then(function(response) {
    return response.json();
  })
  
}





  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmitForm}>
        <input value={nameField} onChange={handleNameChange} type="text" name="name" placeholder="Plant name" />
        <input value={imageField} onChange={handleImageChange} type="text" name="image" placeholder="Image URL" />
        <input value={priceField} onChange={handlePriceChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
