class Person{
    constructor(name){
        this.name=name
    }
    uppper(){
        console.log(this.name.toUpperCase());
    }
    length(){
        console.log(`Uzunligi: ${this.name.length}`);
    }
    sign(){
        let map=new Map();
        for(let item of this.name){
            map.set(item,map.get(item)+1|1)
        }
        console.log(map);
    }
}

module.exports={Person}