const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.DB_Connection);

        console.log('DB Conectada');

    } catch (error) {
        console.log(error);
        throw new Error('Error al intentar inicializar la base de datos');
    }

}


module.exports = {
    dbConnection
}