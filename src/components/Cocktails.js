import React, { Component } from "react";

export default class Cocktails extends Component {
  render() {
    return (
      <div className="cocktails-list">
        <h1> Cocktails </h1>
        {this.props.cocktails === null ? (
          "Loading..."
        ) : (
          <ul>
            {this.props.cocktails.map(cocktail => (
              <li key={cocktail}>{cocktail}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
