interface Computer{
    readonly id:number;
    brand:string;
    ram:number;
    storage?:string;
    upgradeRam(val:number):number;

}

const laptop:Computer={
    id:100,
    brand:'lenova',
    ram:100,
    upgradeRam(val){
        return ( this.ram+val);
    }
}

console.log(laptop.upgradeRam(10));