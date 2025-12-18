class Book{
    readonly title:string;
    author:string;
    //checkedOut:boolean=true;
    private checkedOut=false;

    constructor(title:string,author:string){
        this.title=title;
        this.author=author;

    }
    checkOut(){
        this.checkedOut=this.toggleCheckedOutStatus();
    }
    public isCheckedOut(){
        return this.checkedOut;
    }
    private toggleCheckedOutStatus(){
        return !this.checkedOut;
    }
}

const hp=new Book("Harry porter","JK Rowling");
//hp.checkedOut=false;
hp.checkOut();
hp.checkOut();
console.log(hp.isCheckedOut())
//console.log(hp.title);
