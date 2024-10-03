const express = require('express');
const Admin = require('../models/admin');
const errorHandler = require('../utils/error');
const bcryptjs = require('bcryptjs')
const User = require('../models/user')
const mongoose = require('mongoose');
const { setCredentials } = require('./userController');
const { default: axios } = require('axios');



const adminSignup = async (req, res, next) => {

    const { username, password, email } = req.body;

    const Exist = await Admin.findOne({email: email})
    
    if(!Exist) {

        
        // console.log(req.body)
        const hashedPassword = await bcryptjs.hashSync(password, 10)
        const adminDoc = await Admin.create({ username, password: hashedPassword, email });
        
        const { password: _, ...rest } = adminDoc;
        
        res.status(201).json(rest)
    }
    else {

        next(errorHandler(404, "Already Registered"));
    }


};

const adminSignin = async (req, res, next) => {
    const { email, password } = req.body;
    // console.log(password)
    // console.log(req.body)
    const Exist = await Admin.findOne({ email });

    if (!Exist) {
        return next(errorHandler(400, "User not found"));
    }
    try {
        const check = bcryptjs.compareSync(password, Exist.password)
        
        if(check) {

            res.status(200).json(Exist.username)            
        }
        else {
            next(errorHandler(400, "Password Mismatch"))
        }
    }

    catch(err) {

        next(err);
    }
};

const getAllCompanies = async (req, res, next) => {

    try {
        
        const data = await User.find({isPending: true});
        // console.log(data)
        res.status(200).json(data)
    }

    catch(err) {
        next(err);
    }

}

const getAllCompaniesPending = async (req, res, next) => {
    // console.log("s")
    try {
        
        const data = await User.find({isPending: false});
        // console.log(data)
        res.status(200).json(data)
    }

    catch(err) {
        next(err);
    }

}

const getById = async (req, res, next) => {

    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        // return res.status(400).json({ message: 'Invalid ID format' });
        next(errorHandler(400, "Invalid ID format"))
      }
      else {

          
          
          const ExistDoc = await User.findById(id);
        //   console.log(ExistDoc)
          if(!ExistDoc) {
              next(errorHandler(404, "Item not Found"))
            }
            
            return res.status(200).json(ExistDoc)
        }

}


const getByIdAccept = async (req, res, next) => {

    const id  = req.params.id;
    // console.log(id)
    // console.log("Accp")
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // return res.status(400).json({ message: 'Invalid ID format' });
        next(errorHandler(400, "Invalid ID format"))
      }
      else {

          const ExistDoc = await User.findById(id);
        //   console.log(ExistDoc)
          if(!ExistDoc) {
              next(errorHandler(404, "Item not Found"))
            }
            
            ExistDoc.isPending = true
            await ExistDoc.save()
            // console.log(ExistDoc)
            // console.log(req.body)
            req.body.email = ExistDoc.email;
            req.body.username = ExistDoc.company_name;
            req.body.id = ExistDoc._id;
            return setCredentials(req, res, next);
            // setCredentials()
            // return res.status(200).json(ExistDoc)
        }

}


const getByIdReject = async (req, res, next) => {

    const id  = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        // return res.status(400).json({ message: 'Invalid ID format' });
        next(errorHandler(400, "Invalid ID format"))
      }
      else {

          const ExistDoc = await User.findById(id);
        //   console.log(ExistDoc)
          if(!ExistDoc) {
              next(errorHandler(404, "Item not Found"))
            }

            // console.log(ExistDoc)
            // console.log(req.body)
            req.body.email = ExistDoc.email;
            req.body.username = ExistDoc.company_name;
            req.body.id = ExistDoc._id;
            return setCredentials(req, res, next);
            // setCredentials()
            // return res.status(200).json(ExistDoc)
        }

}

const getChartData = async (req, res, next) => {

    // console.log(req.body)
    const id  = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        // return res.status(400).json({ message: 'Invalid ID format' });
        next(errorHandler(400, "Invalid ID format"))
      }
      else {

          const ExistDoc = await User.findById(id);
        //   console.log(ExistDoc)
          if(!ExistDoc) {
              next(errorHandler(404, "Item not Found"))
            }

            const data = ExistDoc.monthlyReports;
            // console.log(data);
            return res.status(200).json(data);


        }
}


const upload = async (req, res, next) => {

    // console.log(req.body)
    const { deviceToken, month, year, monthlyRevenue, netIncome, burnRate, monthlyActiveUsers, newCustomer, retention, teamSize } = req.body;
    // console.log(req.body)
    const Exist = await User.findOne({deviceToken});

    if(!Exist) {
        next(errorHandler(404, "Account not Found"))
    }
    else {
        
        if(Exist.monthlyReports.length >= 6) {
            
            Exist.monthlyReports.shift();
            await Exist.save();
        }
        let lastIndex = Exist.monthlyReports.length;
        lastIndex--;
        // console.log(Exist.monthlyReports[lastIndex], "asdfsd")
        const lastValue = Exist.monthlyReports[lastIndex].monthlyRevenue;

        const change = (monthlyRevenue - lastValue)/lastValue;

        const array = [];
        
        array.push({
            token: Exist.deviceToken,
            title: "",
            description: `Your Revenue was ${lastValue} last Month and change in ${change}% growth over last Month`,
            deepLink: 'https://yourapp.com/some/deeplink'
        })

        if(change > 0) {
            array[0].title = 'You have done better'
        }
        else if(change < 0) {
            array[0].title = 'We could do better'
        }
        else {
            array[0].title = 'Same Same'
        }
        
        Exist.monthlyReports.push({ month, year, monthlyRevenue, netIncome, burnRate, monthlyActiveUsers, newCustomer, retention, teamSize })
        await Exist.save();

        try {

            const resp = await axios.post('https://todoapp-dsrinaga.p.tnnl.in/sendNotification', array);
        }
        catch(err) {
            console.log(err);
        }

        res.status(200).json("Uploaded")
    }

    
}


const addFund = async (req, res, next) => {

    const { fundAmount, purpose, equity, domain } = req.body;

    const array = [];

    const data = await User.find({});

    for(let i = 0; i < data.length; i++) {
        
        array.push({
            token: data[i].deviceToken,
            title: purpose,
            description: `Hi ${data[i].company_name} grants of ${fundAmount} are open for Applications`,
            deepLink: 'https://yourapp.com/some/deeplink'
        })
    }

    try {

        const resp = await axios.post('https://todoapp-dsrinaga.p.tnnl.in/sendNotification', array);
    }
    catch(err) {
        console.log(err);
    }

    res.end()
    
}

const profile = async (req, res, next) => {

    const { deviceToken } = req.body;

    const Exist = await User.findOne({deviceToken});

    if(!Exist) {
        res.status(400).json("Account not Found")
    }
    else {
        
        res.status(200).json(Exist);
    }
    
}


const reports = async (req, res, next) => {

    const { deviceToken } = req.body;

    const Exist = await User.findOne({deviceToken});

    if(!Exist) {
        res.status(400).json("Account not Found")
    }
    else {
        
        const report = Exist.monthlyReports;

        res.status(200).json(report);
    }
    
}


module.exports = { adminSignin, adminSignup, getAllCompanies, getById, getAllCompaniesPending, getByIdAccept, getByIdReject, getChartData, upload, addFund, profile, reports };
