
import './App.css';
import React,{useState,useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import {nanoid} from "nanoid"

function App() {

   //const [notes,setNotes]=useState([])
   //inital the app by get item from localstorage, remember to add [], as it cause error when lcalstorage "notes" not initialized/defined at first time 
   const [notes,setNotes]=useState(()=>JSON.parse(localStorage.getItem("notes"))|| [])
   //make sure notes[0] exist and then fint the id, or use "" instead 
   const [currentNoteId,setCurrentNoteId]=useState(  (notes[0] && notes[0].id) || "")
   
   useEffect(()=>{
    const allNotes = JSON.stringify(notes)
    localStorage.setItem("notes",allNotes)
   },[notes])

   function createNewNote(){
    const newNote={
      id:nanoid(),
      title:"new note",
      text:"#Please enter note content here.",
      important:false
    }
    //use [] , as it is an array
    setNotes(prevState=> [...prevState, newNote])

    setCurrentNoteId(newNote.id)
    
   }

   function getCurrentNote(){
    const getCurrentNote = notes.find(note => note.id ===currentNoteId)
    //if currentNote not exist return notes[0] or " ", other wise delete note not working propely when deleting the current selected note
    return getCurrentNote || ""
   }

   function updateNote(e){
    const {name,value,type,checked}=e.target
    
    setNotes(prevState=>{
      const newArray=[]
      prevState.map((note)=> { 
        //use unshift to place newly changed note to the begining of the array
       return note.id===currentNoteId ? newArray.unshift({...note, [name]:type!=="checkbox" ? value : checked}) :  newArray.push(note)
      }
       )
       return newArray
      })

   /*   setNotes(prevState=>
        prevState.map((note)=> { 
          //do not place newly changed note to the begining of the array
         return note.id===currentNoteId ? {...note, [name]:type!=="checkbox" ? value : checked} :  note
        }
         )    
        )
 */
 }     

  function deleteNote(event,id){
    event.stopPropagation()
    setNotes(oldNotes=> oldNotes.filter( note=>note.id !== id))
    console.log(id)
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
  

 
 console.log(currentNoteId)
 console.log(notes)

//<Content getCurrentNote={getCurrentNote()}/>  invoke getCurrentNote() with parenthesis, to executing your function directly and get the return value
  return (
    <div className="container"> 
    <div className="header"><Header/></div>
     <div className="sidebar"><Sidebar notes={notes} getCurrentNote={getCurrentNote()} setCurrentNoteId={setCurrentNoteId} createNewNote={createNewNote} deleteNote={deleteNote}/></div>
     <div className="content"> {notes.length===0 ? <p>No notes found!</p> :<Content  getCurrentNote={getCurrentNote()} updateNote={updateNote}/> } </div> 
     <div className="footer"><Footer/></div>
     </div>

  );
}

export default App;
