const fs = require('fs')
const data = require('./data')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const grades=require('./grades')
yargs.command({
    command:'add',
    describe:'add notes',
    builder:{
        id:{
          describe:'student id',
          type:'number',
          demandOption:true,
        },
        name:{
        describe:'student name',
        type:'string',
        demandOption:true,
    },
        subject:{
        describe:'subject name',
        type:'string',
        demandOption:true,},
        grade:{
        describe:'student grade',
        type:'string',
        demandOption:true,},
        comment:{
        describe:'comment',
        type:'string',
        
    }

    },
    handler:(data)=>{
        grades.addGrade(data.id,data.name,data.subject,data.grade,data.comment)
    }
})
yargs.command({
    command:'delete',
    describe:'delete notes',
    builder:{
        id:{
          describe:'student id',
          type:'number',
          demandOption:true,
        },
       
       
        
    },
    handler:(data)=>{
        grades.removeGrade(data.id)
    },
})
yargs.command({
    command:'list',
    describe:'list notes',
    handler:()=>{
        listgrades()
    }
})
yargs.command({
    command:'read',
    describe:'read',
    builder:{
        id:{
          describe:'student id',
          type:'number',
          demandOption:true,
        },
        name:{
        describe:'student name',
        type:'string',
        demandOption:true,
    },},
    handler:(data)=>{
        grades.readGrade(data.id,data.name)
    }
})
yargs.parse()

