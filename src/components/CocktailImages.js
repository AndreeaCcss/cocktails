import React from "react";
import { Link } from "react-router-dom";

export default function CocktailImages(props) {
  const { images } = props;
  return (
    <div className="cocktail-images">
      <Link to="/">Go back to the index</Link>
      <h1>Cocktail Images</h1>
      {/* This page will show images of a specific cocktail category. */}
      {/* This page will show images of the {props.match.params.category} category. */}
      <div>
        {images && images.map(url => <img src={url} alt="Cocktail" />)}
        {!images && "Loading..."}
      </div>
    </div>
  );
}
