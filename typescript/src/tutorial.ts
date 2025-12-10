type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') };
};

const person = randomPerson();

let kathy:Person;
let joe:Person;

kathy={
    name:'Kathy',
    login:()=>{
        console.log("Kathy logged in");
    }
};

joe={
    name:'Joe',
    study:function(){
        console.log('Joe studying')
    }

};

function isStudent (person:Person):person is Student{
    
 return 'study' in person;
 //return (person as Student).study!==undefined;
}

if(isStudent(person)){
  person.study();
}
else{
  person.login();
}

isStudent(person);
//console.log(isStudent(joe));

