enum UserRole {
    Admin,
    Manager, 
    Employee
}

type User= {
    id :number;
    name :string;
    role :UserRole;
    contact:[string,string]; //Tuple [email,phone]
};

function createUser (user:User):User{

    return user;

}

const newUser:User=createUser({
                            id:1,
                            name:'Joe',
                            role:UserRole.Admin,
                            contact:['xyz@mail','3873']

                        });

console.log(newUser);                        