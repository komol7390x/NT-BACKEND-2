function toSelsiy(item){
    console.log(`Farangey: ${Math.floor(item)} °F \nSelsiy: ${Math.floor(item/1.8)}°C`);
}
function toFrangiy(item){
    console.log(`Farangey: ${Math.floor(item)} °F \nSelsiy: ${Math.floor(item*1.8)}°C`);
}

module.exports={toSelsiy,toFrangiy}