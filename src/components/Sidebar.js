import React from 'react'

const Sidebar = (props) => {

  const noteElements = props.notes.map((note, index) => (
    <div  className={props.getCurrentNote.id===note.id ?  "noteElementsActive" : "noteElements"} key={note.id} >  
    <div className="noteElement" onClick={() => props.setCurrentNoteId(note.id)}>
    <h4><span style={{color:note.important ? "#FFDF00" : "grey"}}><i class="fa-solid fa-star fa-md"></i> </span>{index + 1}. {note.title}</h4>
      </div>
     <div className="deleteNote"> <i onClick={(event) => props.deleteNote(event, note.id)} class="fa-solid fa-xmark"></i></div>
    </div>
   
))

  return (
    <div>
    <div className="sidebar-header">
      <h2>Notes</h2><span style={{color:"darkgreen", cursor: "pointer"}}><i class="fa-solid fa-plus fa-xl"  onClick={props.createNewNote}></i></span>
    </div>
    <div>{noteElements} </div>
    </div>
  )
}

export default Sidebar
