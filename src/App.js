import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import NoteList from './main';
import FolderRoute from './FolderRoute'

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Route
        path='folder/:folder.id'
        component={(props) => {
          console.log(props.match)
          return <FolderRoute/>
        }}
      />
        <nav className="nav">
          <Link to='/'><h1>Noteful</h1></Link>
        </nav>
        <NoteList />
      
      </div>
    );
  }
  
}

export default App;
