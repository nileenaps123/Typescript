type User={ id: number; name: string; isActive: boolean };


const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User{
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}


type StringOrNumber=string|number;

let val:StringOrNumber;
val=12;
val="hello";


type Theme='dark'|'light';

let theme:Theme='dark';
theme='light';

function setTheme(t:Theme){
  let theme=t;

}

setTheme('dark')