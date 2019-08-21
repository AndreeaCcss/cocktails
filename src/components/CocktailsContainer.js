import React, { Component } from "react";
import * as request from "superagent";
import Cocktails from "./Cocktails";
export default class CocktailsContainer extends Component {
  state = { cocktails: null };

  componentDidMount() {
    request
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(response =>
        this.updateStateWithCategories(
          response.body.drinks.map(category => category.strCategory)
        )
      )
      .catch(console.error);
  }

  updateStateWithCategories = cocktails => {
    this.setState({
      cocktails: cocktails
    });
  };
  render() {
    return <Cocktails cocktails={this.state.cocktails} />;
  }
}
