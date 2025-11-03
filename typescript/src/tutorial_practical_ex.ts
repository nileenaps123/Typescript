const books=['1984','pets','forest','rain'];
let foundBook:string|undefined;

for (let book of books){
    if (book==='1983'){
        foundBook=book;
        //foundBook.length;
        break;
    }
}
console.log(foundBook?.length)
;
//console.log(foundBook);