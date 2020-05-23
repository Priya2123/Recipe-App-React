import React, {useEffect, useState} from 'react';
import Title from './Title';
import './App.css';
import Recipe from './Recipe';


const App = () => {
  
  const APP_ID = 'b98e2152';
  const APP_KEY = '9e68443d9f576a1ccb2d197447de741b';
  
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');
// const [counter, setCounter] = useState(0);

useEffect(() => {
  getRecipes();
}, [query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  // console.log(data);
  setRecipes(data.hits);
}

const updateSearch = e => {
  setSearch(e.target.value);
}
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return(
    <div className="App">
     
      <div className="image-r">
       <Title />
      </div>  
     <form onSubmit={getSearch} className="search-form">
     
       <input className="search-bar" type="text" value={search} onChange={updateSearch} />
       <button className="search-button" type="submit">Search</button>
     </form>
     <div className="recipes">
     {recipes.map(recipe => (
       <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
     ))};
     </div>
     </div>
  );
} 

export default App;
