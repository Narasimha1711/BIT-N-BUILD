const jwt  = require('jsonwebtoken')
require('dotenv').config()

const secret = process.env.JWT_SECRET

const authorizeAdmin = async (req, res, next) => {

    const token = req.cookies.token;

    jwt.verify(token, secret, {expiresIn: '1hr'});

}