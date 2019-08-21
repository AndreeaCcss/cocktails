import React from "react";
import "./App.css";
import CocktailsContainer from "./components/CocktailsContainer";
import { Route } from "react-router-dom";
// import CocktailImages from "./components/CocktailImages";
import CocktailImagesContainer from "./components/CocktailImagesContainer";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={CocktailsContainer} />
      <Route path="/cocktails/:category" component={CocktailImagesContainer} />
    </div>
  );
}

export default App;
