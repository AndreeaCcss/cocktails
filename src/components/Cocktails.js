import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Cocktails extends Component {
  render() {
    const content =
      this.props.cocktails === null
        ? "Loading..."
        : this.props.cocktails.map(category => {
            console.log("category test:", category);

            const component = encodeURIComponent(category);

            return (
              <li key={category}>
                <Link to={`/cocktails/${component}`}>{category}</Link>
              </li>
            );
          });

    return (
      <div className="cocktails-list">
        <h1>Cocktails</h1>
        <ul>{content}</ul>
      </div>
    );
  }
}
