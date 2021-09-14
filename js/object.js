var student = {
    //property
    firstName: "Mark",
    lastName: "Sakaberg",
    birthYear: 1985,
    
    //method
    getAge: function(currentYear){
        return currentYear - this.birthYear;
    } 
}

document.write(`${student.firstName} ${student.lastName}`);

document.write(`is ${student.getAge(2019)}`);