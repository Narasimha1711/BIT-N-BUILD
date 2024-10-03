const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 7000;
const dbConnection = require('./config/dbConnection');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors')
dbConnection();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/api/admin', adminRoutes)
app.use('/api/user', userRoutes)



app.use((err, req, res, next) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'

    return res.status(statusCode).json({ message });

})


app.listen(PORT, () => {

    console.log(`The server is running on PORT ${PORT}`);
})