const fs=require('fs');

fs.readFile('text.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    // console.log('BU data: ',data);
})
const data=fs.promises.readFile('text.txt','utf-8')
// console.log(data);

data.then(res=>console.log(res)).catch(console.log);
