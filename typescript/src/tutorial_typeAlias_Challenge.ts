/*
Create Employee and Manager objects: Create two Employee objects. 
One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.
Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.

*/

type Employee={id:number,name:string,department:string};

type Manager={id:number,name:string,employees:Employee[]}

type Staff=Employee|Manager;

function printStaffDetails(staff:Staff):void{
    if('employees' in staff ){
        console.log(`${staff.name} is a manager who manages ${staff.employees.length} employees`)
    }else{
        console.log(`${staff.name} is an employee and belongs to ${staff.department}`)
    }
}

const Alice:Employee={id:1,name:"Alice",department:"Admin"};
const Steve:Employee={id:2,name:"Steve",department:"Admin"};

const Bob:Manager={id:10,name:"Bob",employees:[Alice,Steve]}

printStaffDetails(Alice);
printStaffDetails(Bob);
