const express = require('express');
const app = express();

app.listen('4000',()=>{
    console.log('servidor escuchando port 4000');
});



app.get('/',(req,res)=>{
    res.json('funcando')
})