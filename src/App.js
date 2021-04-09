import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    
    return (
      <div className="app">
        <header className="app-header">
          <div className="app-logo-container">
            <img src={dog || logo} className="app-logo" alt="logo" />
          </div>
          <h1 className="app-title">Welcome to Dog Saga</h1>
        </header>

        
        <p className="app-intro">
          {dog ? 'Keep clicking for new dogs' : 'Replace the React icon with a dog!'}
        </p>

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
