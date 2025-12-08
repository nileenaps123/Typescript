type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;

/* function makeSound(animal:Animal):void{
    if(animal.type==='dog'){
        animal.bark();

    }else{
        animal.meow();
    }
} */


function makeSound(animal:Animal){
    if('bark' in animal){
        animal.bark();
    }else{
        animal.meow();
    }

}
    



const ani:Animal={  type: 'cat',
                    name: "tom",
                    meow: () => {console.log("meoooooow")}}

makeSound(ani);