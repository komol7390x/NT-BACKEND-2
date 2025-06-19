function add(a,b){
    console.log(a+b);
}
function minus(a,b){
    console.log(a-b);
}
function mult(a,b){
    console.log(a*b);
}
function division(a,b){
    if(b!=0){
        console.log(a/b);
        return
    }else{
        console.log("0 ga bo'lib bo'lmaydi")
        return 
    }
}

module.exports={add,minus,mult,division}