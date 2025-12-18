class Book{
    private checkedOut=false;

    constructor(readonly title:string,public author:string,private price:number){
      }

    get info(){
        return `${this.title} by ${this.author}`
    }  
    private set checkOut(checkedOut:boolean){
        this.checkedOut=checkedOut;
    }
    get checkOut(){
        return this.checkedOut
    }

    public get moreInfo(){
        this.checkedOut=true;
        return `${this.title} by ${this.author}`

    }

    public getPrice(){
        return this.price;
    }

}

const hp=new Book("Harry porter","JK Rowling",100);
console.log(hp.info);
console.log(hp);
console.log(hp.moreInfo);
//hp.checkOut=true;
console.log(hp.checkOut);

