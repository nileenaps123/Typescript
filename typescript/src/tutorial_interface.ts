interface Book{
    readonly isbn:number;
    title:string;
    author:string;
    genre?:string;
    printAuthor():void;
    printTitle(message:string):string;
    printSomething:(someValue:number)=>number;

}

const deepWork:Book={
    isbn:123,
    title:"deep work",
    author:"cal",
    //price:100,
    genre:"self-help",
    // printAuthor(){
    //     console.log(this.author);
    // },
    printTitle(info){
        return `${this.title} ${info}`;
    },
    //first option
    // printSomething:function (someValue){
    // return (someValue);
    // }

    //second option
    // printSomething:(someValue)=>{

    //     console.log(deepWork.author);
        
    //     return someValue;
    // }
    //3rd option
    printSomething(someValue){
        return someValue;
    },
    printAuthor:()=>{
        console.log(deepWork.author);
    }


};

//deepWork.isbn=4;
deepWork.printAuthor();

const result=deepWork.printTitle("is awesome book");
console.log(result);

console.log(deepWork.printSomething(34))

console.log(deepWork.printSomething(40))
//same with typeAlias below

type Books={
    readonly isbn:number;
    title:string;
    author:string;
    genre?:string;
    //method
    printAuthor():void;

}
const b1:Books={isbn:3,
                title:"journ",
                author:"jose",
                genre:'motiv',
                printAuthor(){
                    console.log(this.author);
                }

}

b1.printAuthor();

