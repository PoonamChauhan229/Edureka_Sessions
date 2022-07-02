const http=require('http')
//help to create server
//sen req=>params,queryparams,body
//res=>we get response from server

let server=http.createServer((req,res)=>{
    res.write("Hello world")
    res.end()
})
server.listen(8901)