import React, { useState } from "react";
import Countries from "./Components/Countries";
import Data from "./resources/countryData.json";
export default function App() {
  const [search, setSearch] = useState("");
  const testArr = Data.filter((e)=>{
    return e.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div id="app">
      <div id="search-div">
        <input
        placeholder="Enter any Country!"
          type="text"
          name="search"
          className="search-box"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e)=>{
            if (e.code=="Escape"){
              setSearch("")
            }
          }}
        />
        <button>Search</button>
      </div>
      <div className="data">
        {search.length==0 ? "" : testArr.map((e) => {
          return <Countries name={e.name} key={e.code} />;
        })}
      </div>
    </div>
  );
}
