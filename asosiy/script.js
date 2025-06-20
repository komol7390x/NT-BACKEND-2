const { log, error } = require('node:console');
const os=require('node:os');
// ----------------------------------------------------------------------------
// OS MODULI

// console.log(os.arch());  //x64
// console.log(os.freemem()/1024/1024); Ram bosh joy
// console.log(os.cpus()); //Yadrosi
// console.log(os.homedir()); //user nomi
// console.log(os.hostname());  //hostname
// console.log(os.loadavg());  //nagruzka
// console.log(os.machine());
// console.log(os.networkInterfaces());   //ip adress info
// console.log(os.platform());  //os info
// console.log(os.release());  //versiyasi
// console.log(os.tmpdir()); //papka nomi
// console.log(os.totalmem()/1024/1024); //ram gb
// console.log(os.type());  //os platforma
// console.log(os.uptime()/60/60);  //yoqilgandan beri qancha vaqt otgani
// console.log(os.version());  //versiyasi

// ----------------------------------------------------------------------------
// PROCESS
// console.log(process);
// console.log(process.env);

// ----------------------------------------------------------------------------
// PATH MODULE
const path=require('node:path');
// console.log(path.basename('/home/ubuntu/Desktop/vs code/NT-BACKEND-2/script.js')); //file ozini qaytradi
// console.log(path.dirname('/home/ubuntu/Desktop/vs code/NT-BACKEND-2/script.js')); //file papkasini qaytradi
// console.log(path.extname('/home/ubuntu/Desktop/vs code/NT-BACKEND-2/script.js'));  //file typeni qytradi
// console.log(path.format({
//     root:'/home',
//     dir:'/ubuntu/Desktop/vs code/NT-BACKEND-2/',
//     base:'script.js'
// }));
// console.log(path.isAbsolute('/home'));  //path bola oladimi yo yomi
// console.log(path.join('/home','ubuntu/Desktop','..','vs code/NT-BACKEND-2/script.js'));  //path papka yaratib beradi
// console.log(path.parse('/home/ubuntu/Desktop/vs code/NT-BACKEND-2/script.js'));
// console.log(path.resolve()); //aynan hozirgi papkani olib beradi
// console.log(__dirname); //aynan hozirgi papkani olib beradi
// console.log(__filename); //aynan hozirgi file olib beradi
// console.log(path.join(__dirname,'..','photo.jpg'));

// ----------------------------------------------------------------------------
// FILE SYSTEM (fs) MODULE
const fs=require('node:fs');
// ---------------------------------
// fs.mkdir('dang',(error=>{
//     if(error){
//         throw console.log(error);
//     }console.log('success');
// }))
// ---------------------------------
// try {
//     fs.mkdirSync('Salom')
//     console.log('Success');
// } catch (error) {
//     console.log(error);
// }
// ---------------------------------
// async function folder(){  //('node:fs/promises');
//     try {
//         fs.mkdir('Salom2')
//         console.log('Dangg');
//     } catch (error) {
        
//     }
// }
// folder()
// ---------------------------------
// fs.mkdir('madrid/real',{recursive:true},(error=>{
//     if(error){
//         throw ('Hato')
//     }
// }))
// ---------------------------------
// async function createFolder(){  //('node:fs/promises');
//     try {
//         fs.mkdir("Salom/qalesan",{recursive:true})
//     } catch (error) {
//         console.log(error);
//     }
// }
// createFolder()
// ---------------------------------
// fs.rm('Salom',{recursive:true,force:true},(error)=>{  //papkani delete qilish
//     if(error){
//         console.log('xato',error);
//     }
// })
// ---------------------------------
// async function removeDir(){
//     try {
//         fs.rm('Salom2',{recursive:true,force:true})
//     } catch (error) {
//         console.log('Xato',error);
//     }
// }
// removeDir()
// ---------------------------------
// fs.writeFile('text.txt','salom',(error=>{
//     if(error){
//         console.log(error);
//     }
// }))
// ---------------------------------
