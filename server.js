const http = require('http');
const {getKullanicilar,getKullanici,createKullanici,deleteKullanici} = require('./controller/kullaniciKontroller');

const port = 3000;

const server = http.createServer((req, res) => {
      if(req.url==='/api/kullanicilar' && req.method==='GET'){
           getKullanicilar(req,res);
      }
      else if(req.url.match(/\/api\/kullanici\/([0-9]+)/) && req.method==='GET'){
        const id=req.url.split('/')[3];
        getKullanici(req,res,id);
     }
     else if(req.url==='/api/kullanici'  && req.method==='POST'){
           createKullanici(req,res);
     }
     else if(req.url.match(/\/api\/kullanici\/([0-9]+)/) && req.method==='DELETE'){
      const id=req.url.split('/')[3];
      deleteKullanici(req,res,id);
   }
     else 
      {
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({mesaj:'Hatalı istek'}));
      }
});

server.listen(port, () => {
  console.log(`Server ayakta:${port}/`);
});