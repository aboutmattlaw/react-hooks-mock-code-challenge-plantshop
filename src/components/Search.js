import React, {useState} from "react";

function Search({setSearchh}) {



  function handleSerch(e){
    setSearchh(e.target.value)
    // runSearch(search)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSerch}
      />
    </div>
  );
}

export default Search;
