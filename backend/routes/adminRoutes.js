const express = require('express');
const { adminSignin, adminSignup, getAllCompanies, getById, getAllCompaniesPending, getByIdAccept, getByIdReject, getChartData, upload, addFund, profile, reports } = require('../controllers/adminController');
const router = express.Router()


router.post('/signin', adminSignin);
router.post('/signup', adminSignup);
router.get('/getCompanies', getAllCompanies);
router.get('/getCompaniesPending', getAllCompaniesPending);
router.post('/getByIdAccept/:id', getByIdAccept);
router.post('/getByIdReject/:id', getByIdReject);
router.post('/getChartData/:id', getChartData);
router.get('/getById/:id', getById);
router.post('/upload', upload)
router.post('/addFund', addFund)
router.get('/profile', profile)
router.get('/reports', reports)

// router.get('/signin', adminSigninm);


module.exports = router;
