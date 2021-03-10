const Kullanici = require('../model/kullaniciModel');

async function getKullanicilar(req,res) {
    try {
        const kullanicilar = await Kullanici.findAll();
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(kullanicilar))
        
    } catch (error) {
        console.log(error);
    }
}


async function getKullanici(req,res,id){
    try {
        const kullanici=await Kullanici.findById(id);

        if(!kullanici){
            res.writeHead(404,{'Content-Type':'application/json'});
            res.end(JSON.stringify({mesaj:'Kullanıcı bulunamadı'}));
        }else{
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(kullanici));
        }

        
    } catch (error) {
        console.log(error);
    }
}

async function createKullanici(req,res) {
    try {
        const kullanici = {
            isim:"yeni kullanici",
            email:"yeni@gmail.com"
        }
        const yeniKullanici = await Kullanici.create(kullanici);
        res.writeHead(201,{'Content-Type':'application/json'});
       return  res.end(JSON.stringify(yeniKullanici));
        
    } catch (error) {
        console.log(error);
    }
}

async function deleteKullanici(req,res,id) {
   try {
    const kullanici=await Kullanici.findById(id);

    if(!kullanici){
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({mesaj:'Kullanıcı bulunamadı'}));
    }else{
        await Kullanici.remove(id);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({mesaj:'silindi'}));
    }
       
   } catch (error) {
       
   } 
    
}

module.exports={
    getKullanicilar,
    getKullanici,
    createKullanici,
    deleteKullanici
}