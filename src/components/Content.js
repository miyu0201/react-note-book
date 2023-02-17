import React from 'react'

const Content = (props) => {
  return (
    <div>
    <label style={{fontSize:"20px"}}>Note Title:</label>
    <input className="noteTitle"
     type="text"
     name="title"
     value={props.getCurrentNote.title}
     onChange={props.updateNote}
     placeholder="Please enter note title here."
    />
    
    <textarea className="noteContent"
        name="text"
        value={props.getCurrentNote.text}
        onChange={props.updateNote}
      />
      <br></br> <br></br>
    <label htmlFor="important" style={{fontSize:"20px"}}>Set as important?   </label>
    <input 
     id="important"
     type="checkbox"
     name="important"
     checked={props.getCurrentNote.important}
     onChange={props.updateNote} 
    />
    
    </div>

   
  )
}

export default Content
/*
      */