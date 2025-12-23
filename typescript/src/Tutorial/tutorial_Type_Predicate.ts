interface Person{
    name:string;
}

interface DogOwner extends Person{
    dogName:string;
}

interface Manager extends Person{
    managePeople():void;
    delegateTasks():void;
}

function getEmployee():Person|DogOwner|Manager{
    let random=Math.random();
    if(random<0.33){
        return{
            name:"Alice"
        };
    }else if(random<0.66){
        return {
            name:"Joe",
            dogName:"Rex"

        }
    }else{
        return{
            name:"Bob",
            managePeople:()=>{
                console.log("managing people...")

            },
            delegateTasks(){
                console.log("delegating tasks...")

            }


        }
    }
}

const employee:Person|DogOwner|Manager=getEmployee();

function isManager(obj:Person|DogOwner|Manager):obj is Manager{
    return 'managePeople'  in obj
}
if (isManager(employee)){
    employee.delegateTasks();
}
//console.log(isManager(employee));