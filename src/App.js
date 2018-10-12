import React, { Component } from 'react';

// Components:
import { FetchButton } from './components/FetchButton'

class App extends Component {
  render() {
    return (
      <div id="main-container">
        <FetchButton />

        <h2 className="h2">User list:</h2>
      </div>
    );
  }
}

export default App;
