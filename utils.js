const fs = require('fs');

function dosyaYaz(dosyaAd,icerik) {
    fs.writeFileSync(dosyaAd,JSON.stringify(icerik),'utf-8',(err)=>{
        if(err){
            console.log(err);
        }
    })
}

module.exports={
    dosyaYaz
}