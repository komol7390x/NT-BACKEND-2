const { add,minus,mult,division } = require("./child");
const {sayHi}=require('./greet')
const{Person}=require('./stringUtils')
const {toFrangiy,toSelsiy}=require('./tempConverter')
const {circle,kvadrat,burchak}=require('./area')
// ----------------------------------------------------------
// TASK-1
// add(3,4);
// minus(5,3);
// mult(3,2);
// division(3,0);
// division(9,3)
// ----------------------------------------------------------
// TASK-2
// sayHi('Komol')
// ----------------------------------------------------------
// TASK-3
const person=new Person('Komol')
// person.uppper()
// person.length()
// person.sign()
// ----------------------------------------------------------
// TASK-4
// toSelsiy(40)
// toFrangiy(80)
// ----------------------------------------------------------
// TASK-5
// circle(5)
// kvadrat(4);
// burchak(3,4)
// ----------------------------------------------------------------------------------------------------------------------
// QOSHIMCHA

// let n = 10;

// async function func() {
//     return await new Promise(res => {
//         setTimeout(() => {
//             n = 30;
//             res(n);
//         }, 2000);
//     });
// }
// async function res(){
// const a = await func();
// console.log(a); 
// }
// res()

// let n = 10;

// function salom(callback) {
//     setTimeout(() => {
//         n = 30;
//         callback(n);
//     }, 2000);
// }

// salom((res) => {
//     console.log(`Bu qiyamt ${res} qo'shildi`); // 30
// });

async function func(isBoolen){
    if(isBoolen){
        return true
    }else{
        throw new Error('Xatolik bajarildi');
    }
}
func(false).then(res=>console.log('Resolve bajarildi')).catch(err=>console.log(err.message))
