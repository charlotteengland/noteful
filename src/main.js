import React, { Component } from 'react';
import NOTES from './notes';
import './main.css';
import SideBar from './SideBar'


class NoteList extends Component {
  render() {
    const notes = NOTES.notes;
    
    return (
      <>
        <SideBar/>
        <p>Notes below</p>
        <ul className="poemLlist">
          {notes.map (note => 
            <li key={note.id} className="note-list">
              <h3>{note.name}</h3>
              <p>{note.content}</p>
            </li>
            )}
        </ul>
    </>
    )
  }
}

export default NoteList;


// export default function PoemListPage() {
//   return (
//     <>
//       <p>Choose a poem from the list below.</p>
//       <ul className='PoemList'>
//         {POEMS.map(poem =>
//           <li key={poem.id}>
//             <Link to={`/poem/${poem.id}`}>
//               {poem.title}
//             </Link>
//           </li>
//         )}
//       </ul>
//     </>
//   )
// }