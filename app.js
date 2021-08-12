
const chalk = require('chalk')
const { string, demandOption, argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')


//Customise yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note Title',
        demandOption : true,
        type : 'string'
        },
        body : {
            describe : 'This is the Note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Create remove command
yargs.command({
    command : 'remove',
    describe : 'Remove the note',
    builder : {

        title : {
            describe : "Note title",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command : 'list',
    describe : 'Lists the notes',
    // builder : {
    //     title : {
    //         describe : "Note List",
    //     },
    //     body : 'This is the Note'
    // },
    handler(){
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command : 'read',
    describe : 'Reads the note(s)',
    builder : {
        title : {
            describe : "Title to be searched",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


yargs.parse()
//console.log(yargs.argv)