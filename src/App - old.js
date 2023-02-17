
import './App.css';
import React,{useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import {nanoid} from "nanoid"

function App() {

   const [notes,setNotes]=useState([])
   const [currentNoteId,setCurrentNoteId]=useState( (notes[0] && notes[0].id) || "")
   
   function createNewNote(){
    const newNote={
      id:nanoid(),
      
      text:"Please enter note content here."
    }
    //use [] , as it is an array
    setNotes(prevState=> [...prevState, newNote])

    setCurrentNoteId(newNote.id)
    
   }

   function getCurrentNote(){
    const getCurrentNote = notes.find(note => note.id ===currentNoteId)
    //use if ...else, otherwise at the render, getCurrentNote.text does not exist
   if (getCurrentNote ){
    return getCurrentNote.text
   }
    else  {return ""}
  
   }

   function updateNote(e){
    setNotes(prevState=>
      prevState.map((note)=> { 
        return note.id===currentNoteId ? {...note, text:e.target.value} : note}
       ))
   
 }     
 
   /*
    setNotes(prevState=>
     prevState.map((note)=>  note.id===currentNoteId ? {...note, text:e.target.value} : note
      ))

    setNotes(prevState=>
      prevState.map((note)=> { return note.id===currentNoteId ? {...note, text:e.target.value} : note}
       ))

    setNotes((prevState)=> {
     return  prevState.map((note)=> {
        return note.id===currentNoteId ? {...note, text:e.target.value} : note
      }) 
   */
  

 console.log(notes)
 console.log(currentNoteId)

//<Content getCurrentNote={getCurrentNote()}/>  invoke getCurrentNote() with parenthesis, to executing your function directly and get the return value
  return (
    <div className="container"> 
    <div className="header"><Header/></div>
     <div className="sidebar"><Sidebar notes={notes} setCurrentNoteId={setCurrentNoteId} createNewNote={createNewNote}/></div>
     <div className="content"> {notes.length===0 ? <button onClick={createNewNote}>Create New Note</button> :<Content  getCurrentNote={getCurrentNote()} updateNote={updateNote}/> } </div> 
     <div className="footer"><Footer/></div>
     </div>

  );
}

export default App;
