import React, { Component } from 'react';
import RecipeBook from './recipeBook.js';
import RecipeList from './recipeList.js';
import Pizza from './pizza.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          my-recipes
        </p>
        {/* <RecipeBook /> */}
        <RecipeList />
        {/* <Pizza /> */}
      </div>
    );
  }
}

export default App;
