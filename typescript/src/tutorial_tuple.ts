let person:[string,number]=['hello',10];

let data:readonly[number,number,number]=[10,29,30];


console.log(data);

function getPerson():[string,number]{
    return ['hello',40];

 };

 let randomPerson=getPerson();

 console.log(randomPerson[0]);
 console.log(randomPerson[1]);

 let susan:[string,number?]=['susan'];