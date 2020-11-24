const express = require('express');
const app = express();
const morgan = require('morgan');


const routerAuth = require('./Router/routerAuth');
const routerCategory = require('./Router/routerCategory');
const routerProduct = require('./Router/routerProduct');

const BD = require('./DataBase/DataBase');

BD.connect().then(()=>{
    console.log('conectado a la bd exitosa')
}).catch((err)=>{
    console.log('ERROR '+err)
})

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth/',routerAuth);
app.use('/api/category/',routerCategory);
app.use('/api/product/',routerProduct);



app.listen('4000',()=>{
    console.log('servidor escuchando port 4000');
});



