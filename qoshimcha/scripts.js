const { error } = require('node:console');
const fs=require('node:fs');
const path=require('node:path');

const data=fs.statSync('bigFile.txt');
// // console.log(data.size);
// const mb=512*1024*1024
// while(data.size<mb){
//     fs.appendFileSync('bigFile.txt','salom');
// }
console.log(data.size/1024/1024);

