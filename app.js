const express = require('express');
const path = require('path')
const app = express();
port = 3000;
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/index.html'))
})

app.listen(3000,()=>console.log(`app listening to the port ${port}`))