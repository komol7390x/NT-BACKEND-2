const { log } = require('node:console');
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

