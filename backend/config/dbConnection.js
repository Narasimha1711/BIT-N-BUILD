const mongoose = require('mongoose')
require('dotenv').config()
const connection = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Database Successfully Connected')
    }
    catch(err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connection