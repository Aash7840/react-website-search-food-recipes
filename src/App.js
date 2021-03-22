import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./components/Header"
import Recipes from "./components/Recipes"
import Axios from "axios"
function App() {

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "343061b7";
  const APP_KEY = "692e2147d763242aa9d5386df2c02202";

  useEffect( () => {
    getRecipes();
  }, []);

  const getRecipes = async ()=>{
    const resp = await Axios.get(
      ` https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free `
    );
    setRecipes(resp.data.hits);
    console.log(resp.data.hits); 
  }



  const onInputChange = (e) => {
    setSearch(e.target.value);

  }
const onSearchClick= ()=>{
  getRecipes();
}


  return (
    <div className="App">

      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      <div className="container">
        <Recipes recipes={recipes} /></div>
    </div>
  );
}

export default App;
