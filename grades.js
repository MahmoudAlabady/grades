const fs = require('fs')

const addGrade = (id,name,subject,grade,comment="no comment") =>{
    
    const grades = loadGrades() 
    const duplicateId = grades.filter((g)=>{
       
      return g.id === id
    })
    if(duplicateId.length === 0){
        grades.push({
        
            id:id,  
            name:name,
            subject:subject,
            grade:grade,
            comment:comment
    
        })
        saveGrades(grades)
    }
   
   
    else{
        console.log('Error')
    }
    

}

const loadGrades = () =>{
  

    try{
        const dataBuffer = fs.readFileSync('grade.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(error){
        return []
    }
}

const saveGrades = (grades) =>{
    const saveData = JSON.stringify(grades)  
    fs.writeFileSync('grade.json',saveData)
}

const removeGrade = (id) =>{
    const grades = loadGrades()

    const gradesNotRemoved = grades.filter((id)=>{
    
    
        return grades.id !== id
    })
    saveGrades(gradesNotRemoved)
    
}

const readGrade = (id) =>{
    const grades = loadGrades()
    const grade = grades.find((id,name)=>{
       
        return grade.id === id && grade.name == name
    })
   
}
const listgrades = () =>{
    const grades = loadGrades()
    grades.forEach((grade)=>{
        console.log(grade.id+" "+grade.name + " "+grade.grade+' '+grade.subject)
    })
}
module.exports = {
    addGrade,
    removeGrade,
    readGrade,
    listgrades
}