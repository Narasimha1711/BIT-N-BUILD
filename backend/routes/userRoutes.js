const express = require('express');
const { userSignup, setCredentials, userSignin } = require('../controllers/userController');
const router = express.Router()


// router.post('/signin', adminSignin);
router.post('/auth/signup', userSignup);
router.post('/auth/signin', userSignin);
router.post('/sendCredentials', setCredentials)
// router.get('/signin', adminSigninm);


module.exports = router;
