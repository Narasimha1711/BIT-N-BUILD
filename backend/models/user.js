const mongoose = require('mongoose')

const monthlyReportSchema = new mongoose.Schema({
    month: { type: String }, // e.g., "January"
    year: { type: String },  // e.g., "2024"
    monthlyRevenue: { type: Number }, // revenue for that month
    netIncome: { type: Number }, // revenue for that month
    burnRate: { type: Number }, // revenue for that month
    monthlyActiveUsers: { type: Number }, // revenue for that month
    newCustomer: { type: Number }, // revenue for that month
    retention: { type: Number }, // revenue for that month
    teamSize: { type: Number }, // revenue for that month

}, { _id: false });



const userSchema = new mongoose.Schema({

    
    deviceToken: {
        type: String,
        // required: true
    },

    company_name: {
        type: String,
        // required: true
    },

    registered_address: {
        type: String,
        // required: true
    },

    registration_month: {
        type: String,
        // required: true
    },

    registration_year: {
        type: String,
        // required: true
    },

    contact_representative: {
        type: Number,
        // required: true
    },

    company_domain: {
        type: String,
        // required: true
    },

    sub_domain: {
        type: String,
        
    },

    business_structure: {
        type: String,
        // required: true
    },

    memorandum_of_association: {
        type: String,
        // required: true
    },

    articles_of_association: {
        type: String,
        // required: true
    },

    latest_financial_report: {
        type: String,
        // required: true
    },

    number_of_employees: {
        type: Number,
        // required: true
    },

    current_funding_status: {
        type: String,
        // required: true
    },

    intellectual_property: {
        type: String,
        // required: true
    },

    isPending: {
        type: Boolean,
        default: 0
    },

    email: {
        type: String,
        sparse: true,
        unique: true,
    },

    password: {
        type: String,
        
    },
    
    username: {
        type: String,
        unique: true,
        sparse: true
    },

    monthlyReports: [monthlyReportSchema]

    
    
},
{
    timestamps: true
})


const User = mongoose.model('User', userSchema)
module.exports = User