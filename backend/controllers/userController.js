const express = require('express');
const User = require('../models/user')
const errorHandler = require('../utils/error');
const bcryptjs = require('bcryptjs')
require('dotenv').config()
const generator = require('generate-password');
const nodemailer = require('nodemailer')


const userSignup = async (req, res, next) => {

    // const { deviceToken, registered_address, }
    console.log(req.body.startup_details);
    
    try {
        // const userDoc = new User(req.body.startup_details);
        // await userDoc.save();
        const userDoc = await User.create(req.body.startup_details)
        console.log(userDoc)
        res.end()
        
    }

    catch(err) {
        console.log(err)
        next(err);
    }
}


const userSignin = async (req, res, next) => {

    // const { deviceToken, registered_address, }
    // console.log(req.body.startup_details);
    const { username, password } = req.body;

    const Exist = await User.findOne({username});

    // console.log(Exist);
    if(!Exist) {
        return next(errorHandler(404, "Account not Found"));
    }
    else {
        const check = await bcryptjs.compareSync(password, Exist.password)

        if(check) {
            res.status(200).json(Exist.company_name)
        }
        else {
            next(errorHandler(400, "Password Mismatch"))
        }
    }

    // try {
    //     const Exist = await User.findOne({email});

    //     if(!Exist) {
    //         next(errorHandler(404, "Account Not Found"));
    //     }
    //     else {
    //         res.status(200).json({username: Exist.username});
    //     }
        
    // }

    // catch(err) {
    //     console.log(err)
    //     next(err);
    // }
}





const setCredentials = async (req, res, next) => {
        const { email, username, id } = req.body;
        // console.log(req.body)
        const password = generator.generate({
            length: 8,
            numbers: true
        });

        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can use other services as well (e.g., Outlook, Yahoo, etc.)
            auth: {
                user: process.env.EMAIL, // Your email
                pass: process.env.PASSWORD // Your email password or App Password
            }
        });
        
        const Exist = await User.findOne({ _id: id })
        Exist.username = username;
        await Exist.save();
        Exist.email = email;
        await Exist.save();
        const hashedPassword = await bcryptjs.hashSync(password, 10);
        Exist.password = hashedPassword;
        await Exist.save();

        const mailOptions = {
            from: process.env.email,
            to: email,
            subject: 'Your Account Credentials',
            text: `Hello ${username},\n\nHere are your login credentials:\nUsername: ${username}\nPassword: ${password}\n\nPlease keep your credentials safe.\n\nBest regards,\nYour Company`
        };
    
        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            // res.status(200).send('Email sent successfully.');
            return res.status(200).json(email)
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email.');
        }


}

module.exports = { userSignup, setCredentials, userSignin }