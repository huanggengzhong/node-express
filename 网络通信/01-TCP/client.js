//客户端 
const net =require('net');
const client=net.createConnection({
    host:'127.0.0.1',
    port:3000
})

client.on('connect',()=>{
    console.log("成功连接上服务器了");
    
})
client.on('data',data=>{
    console.log(data.toString());//得到服务器端的数据
    
})