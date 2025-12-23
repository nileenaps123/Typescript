//let nv:never=1;

type Theme="dark"|"light";

function themeCheck(theme:Theme):string{

    if(theme==='dark'){
        return "dark theme";
    }
    
    if(theme==='light'){
        return "light theme";
    }


}

enum Color{
    Red,
    Blue,
    Green,
    Yellow
}

function getColor(color:Color){
    switch(color){
        case Color.Red:
            return "red";
        case Color.Blue:
            return "blue" ;
        case Color.Green:
            return "Green" ;    
        default:

           //build
           let unexp:never=color;

           //run
            throw new Error(`Unexpected color value ${color}`);       
    }
}

console.log(getColor(Color.Blue));
console.log(getColor(Color.Red));
console.log(getColor(Color.Green));
console.log(getColor(Color.Yellow));

