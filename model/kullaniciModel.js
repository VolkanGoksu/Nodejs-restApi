var kullanicilar = require('../data/kullaniciDB.json');
const {v4:uuidv4} = require('uuid');
const {dosyaYaz} = require('../utils');

function findAll() {
    return new Promise((resolve,reject)=>{
        resolve(kullanicilar);
    })
}
function findById(id) {
     return new Promise((resolve,reject)=>{
        const kullanici=kullanicilar.find((k)=>k.id===id);
        resolve(kullanici);
       
    })
}
function create(kullanici) {
    return new Promise((resolve,reject)=>{
        const yeni = {id:uuidv4(),...kullanici};
        kullanicilar.push(yeni);

        //dosyaya yazdırma
        dosyaYaz('./data/kullaniciDB.json',kullanicilar);
        resolve(yeni);
       
    })
}

function remove(id) {
    return new Promise((resolve,reject)=>{
       kullanicilar = kullanicilar.filter((k)=>k.id!==id);
       dosyaYaz('./data/kullaniciDB.json',kullanicilar);
       resolve();
       
    })
}
module.exports={
    findAll,
    findById,
    create,
    remove
}