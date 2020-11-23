
const jwt= require('jsonwebtoken');

const GeneradorToken=(id,nombre)=>{

    return new Promise(
        (resolve,reject)=>{
            const payload={id,nombre};
            jwt.sign(payload,process.env.SECRET_JWT_KEY,{expiresIn: '4h'},(err,token)=>{
                if(err){
                    console.log(err);
                    reject('no se pudo generar token');
                }
                resolve(token);
            });
        }
    )

}

const DecodificarToken=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.SECRET_JWT_KEY,(err,decode)=>{
            if(err){
                reject('ocurrio un error');
            }
            resolve(decode);
        })

    })
}

module.exports={
    GeneradorToken,
    DecodificarToken
}