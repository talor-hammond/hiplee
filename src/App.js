import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div id="main-container">
        <div className="button-container">
          <button className="btn btn-primary">Fetch users</button>
        </div>

        <h2 className="h2">User list:</h2>
      </div>
    );
  }
}

export default App;
