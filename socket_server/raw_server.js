const http = require('http');
const net  = require('net');
const crypto  = require('crypto');


let server = net.createServer(sock=>{
    console.log('连接');
    
    // 数据过来---只有一次握手
    sock.once('data',data=>{
        console.log('hand shake start...');

       let str=data.toString();
       let lines = str.split('\r\n');

       lines = lines.slice(1,lines.length-2);

       let  headers = {};
       lines.forEach(line=>{
           let [key,val] = line.split(':');

           headers[key.toLowerCase()] = val;
       })

       console.log(headers);
    })
})

server.listen(8080);