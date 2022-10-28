import "./App.css";
import Phonebook from "components/Phonebook/Phonebook";

import React, { Component } from "react";

export default class App extends Component {
  formSubmitHandler = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div className="App">
        <Phonebook onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}
