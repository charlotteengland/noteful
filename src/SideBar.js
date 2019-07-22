import React, { Component } from 'react';
import NOTES from './notes';
import './SideBar.css';

class SideBar extends Component {
  render() {
    const folders = NOTES.folders;
    
    return (
      <>
        <ul className="sideBar">
          {folders.map (folder => 
            <li key={folder/folder.id} className="sidebar">
              <a href={`/folder/${folder.id}`}>
              {folder.name}
              </a>
            </li>
            )}
        </ul>
    </>
    )
  }
}

  export default SideBar;