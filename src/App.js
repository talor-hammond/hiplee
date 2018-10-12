import React, { Component } from 'react';

// Components:
import FetchButton from './components/FetchButton'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'

class App extends Component {
  render() {
    return (
      <div id="main-container">
        <FetchButton />

        <h2 className="h2">User list:</h2>
        <UserList />

        <UserProfile />
      </div>
    );
  }
}

export default App;
