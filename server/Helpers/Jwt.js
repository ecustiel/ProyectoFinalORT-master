const jwt = require('jsonwebtoken');

const generateJWT = (uid, name) => {

    return new Promise ((resolve, reject) => {

        const payload = {uid, name};

        jwt.sign(payload, process.env.JWT_SECRET_WORD, {
            expiresIn: '1h'
        }, (err, token) => {

            if(err){
                console.log(err);
                reject('El token no se ha podido generar!');
            }

            resolve(token);

        })


    })


}




module.exports = {
    generateJWT
}