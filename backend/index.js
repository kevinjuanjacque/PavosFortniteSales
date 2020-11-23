const express = require('express');
const app = express();
const morgan = require('morgan');


const routerAuth = require('./Router/routerAuth');
const routerCategory = require('./Router/routerCategory');
const routerProduct = require('./Router/routerProduct');

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth/',routerAuth);
app.use('/api/category/',routerCategory);
app.use('/api/product/',routerProduct);



app.listen('4000',()=>{
    console.log('servidor escuchando port 4000');

    sequelize.authenticate().then(()=>{
        console.log(`CONECTADO A LA DB CORRECTAMENTE `);
    }).catch((err)=>{
        console.log(`OCURRIO EL SGTE ERROR=> ${err}`);
    })
});



