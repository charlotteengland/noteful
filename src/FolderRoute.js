import React from 'react'
import NOTES from './notes';
import SideBar from './SideBar'


export default function FolderRoute(props) {
  const notes = NOTES.notes;

  const results = notes.filter(selection =>
    selection.folderId === props.match.params.poemId)

    return (
      <>
        <SideBar/>
        <p>Notes fildered by Folder selected below</p>
        <ul>
          <li>
            <p>{results.name}</p>
            <p>{results.content}</p>
          </li>
        </ul>
    </>
    )
}





// import React from 'react'
// import POEMS from './poems'

// export default function PoemPage(props) {
//   const poem = POEMS.find(p =>
//     p.id === props.match.params.poemId
//   )
//   return (
//     <article className='Poem'>
//       <h2>{poem.title}</h2>
//       {poem.content.map((p, i) =>
//         (p === '')
//           ? <br key={i} />
//           : <p key={i}>{p}</p>
//       )}
//     </article>
//   )
// }