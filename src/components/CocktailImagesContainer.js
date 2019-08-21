import React, { Component } from "react";
import CocktailImages from "./CocktailImages";
import request from "superagent";

export default class CocktailImagesContainer extends Component {
  state = { images: null };

  componentDidMount() {
    const category = this.props.match.params.category;
    request
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
      )
      .then(response =>
        this.updateImages(
          response.body.drinks.map(drink => drink.strDrinkThumb)
        )
      )
      .catch(console.error);
  }

  updateImages(images) {
    this.setState({
      images: images
    });
  }

  render() {
    return <CocktailImages images={this.state.images} />;
  }
}
