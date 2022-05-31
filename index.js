// assign employee variable to object containing name and street 


const employee = {
    street: '11 Broadway',
    name: 'Sam'
}; 

//spread operator
function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = {...employee};
    newEmployee [key] = value;
    return newEmployee;

}

//destructive
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){

    employee[key]=value;
    return employee;
}

//spread operator
function deleteFromEmployeeByKey(employee,key){
    const newEmployee = {... employee};;
    delete newEmployee[key];
    return newEmployee;
}

//destructive
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}