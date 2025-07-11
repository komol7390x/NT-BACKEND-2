import bcrypt from 'bcrypt'
const resultBcrypt=async(item)=>{
    const res=await bcrypt.genSalt(3);
    const hash=await bcrypt.hash(item,res)
    return hash
}

const res=await resultBcrypt('salom')
const check=await bcrypt.compare('salom',res);
console.log(check);

