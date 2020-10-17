import React, { useEffect, useState } from "react";
import Title from "./Title";
import "./App.css";
import { motion } from "framer-motion";
import Recipe from "./Recipe";


const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      //yoyo allows us to repeat animations - here any number is the no. of keyframes(from original value)
      yoyo: Infinity,
      duration: 0.8,
    },
  },
};

const App = () => {
  const APP_ID = "b98e2152";
  const APP_KEY = "9e68443d9f576a1ccb2d197447de741b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  // const [counter, setCounter] = useState(0);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    // console.log(data);
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
  <motion.div className="App">
      <div className="image-r">
        <Title />
      </div>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <motion.button  variants={buttonVariants}
          whileHover="hover"
          className="search-button" type="submit">
          Search
        </motion.button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
        ;
      </div>
    </motion.div>
  );
};

export default App;
