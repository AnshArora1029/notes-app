const fs = require('fs')
const chalk = require('chalk')
//console.log('notes.js')

const getNotes = ()=> {
   return 'Enter Notes...'
}

const addNote = (title, body)=> {
   const notes = loadNotes()
   const duplicateNotes = notes.filter((note)=> note.title === title)
   
   if(duplicateNotes.length === 0){
      notes.push({
         title : title,
         body : body
      })
   
      saveNotes(notes)
      console.log(chalk.green.inverse.bold('New Note Added!'))
   }
   else{
      console.log(chalk.red.bold.inverse('Title already taken!'))
   }
   

}

const removeNote = (title)=> {
   const notes = loadNotes()
   const notesToKeep = notes.filter((note)=> note.title !== title)
   if(notes.length !== notesToKeep.length){
      saveNotes(notesToKeep)
      console.log(chalk.green.inverse.bold('Note Deleted!'))
   }
   else{
      console.log(chalk.red.inverse.bold('Title Doesnt Exist!'))
   }


}

const listNotes = ()=> {
   const notes = loadNotes()
   console.log(notes)
   console.log('***********')
   console.log(chalk.bold.magenta.inverse('Your notes are : '))
   notes.forEach((note)=> {
      console.log(note.title)
   }
    )}

const saveNotes = (notes)=> {
   const data = JSON.stringify(notes)
   fs.writeFileSync('notes.json', data)
}

const loadNotes = ()=> {
   try{
      const dataBuffer = fs.readFileSync('notes.json')
   const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
   } catch (e){
      return[]
   }
   
}


module.exports = {
   getNotes : getNotes,
   addNote : addNote,
   listNotes : listNotes,
   removeNote : removeNote
}