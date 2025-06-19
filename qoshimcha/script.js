const { error } = require('console');
const fs=require('fs');

// fs.readFile('text.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     // console.log('BU data: ',data);
// })
// const data=fs.promises.readFile('text.txt','utf-8')
// // console.log(data);

// data.then(res=>console.log(res)).catch(console.log);

fs.readFile('text.txt','utf-8',((error,data)=>{
    if(error){
        console.log('Xatolik chiqdi',error);
    }else{
        console.log('Filega text oqildi \nText: ',data);
    }
}))

// const read=fs.readFileSync('text.txt','utf-8')
// console.log(read);

// fs.writeFile('text.txt','Salom Dunyo',((error)=>{
//     if(error){
//         console.log('XAtolik bor');
//         return
//     }
//     console.log('Faylga yozildi, ');
// }))

