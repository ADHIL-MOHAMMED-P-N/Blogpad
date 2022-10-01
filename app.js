const express = require('express');
const app = express();
port = 3000;

app.get('/',(req,res)=>{
    res.send("Blogpad")
})

app.listen(3000,()=>console.log(`app listening to the port ${port}`))