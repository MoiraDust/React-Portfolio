import React, { Component } from "react";
import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
// import Home from "./PortfolioContainer/Home/Home";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <PortfolioContainer />
      </div>
    );
  }
}
