let fs=require('fs')


fs.writeFile("1text.txt","Hello New file generated",()=>{
    console.log("File created with text")
})

fs.writeFile("1text.txt","old daata deleted",()=>{
    console.log("File created with text")
})

fs.appendFile("1text.txt","New data added along with old one ",()=>{
    console.log("New data added along with old data")
})

fs.readFile("1text.txt",(err,data)=>{
    if (err) throw err;
    console.log(data)
})

fs.readFile("1text.txt",'utf-8',(err,res)=>{
    if (err) throw err;
    console.log(res)
})

fs.readFile('data.json','utf-8',(err,res)=>{
    if(err) throw err;
    console.log(res)
})
// fs.rename('mycodetext.txt','1text.txt',(err)=>{
//     if (err) throw err;
//     console.log('file renamed')
// })

fs.writeFile("deletefile","Delete",(err,res)=>{
    if(err) throw err;
    console.log(res+"File addedd")
})

fs.unlink("deletefile",(err)=>{
    if(err) throw err
    console.log("file deleted")
})