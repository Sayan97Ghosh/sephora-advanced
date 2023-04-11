const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { userAuthModel } = require('../models/userAuth.model');

const userSignup = async (req, res) => {

    const { email, password } = req.body;


    try {
        const isExistUser = await userAuthModel.findOne({ email })

        if (isExistUser) return res.status(409).json({ message: 'User email is already exist' })

        // console.log(process.env.SALTROUNDS)


        bcrypt.hash(password, +process.env.SALTROUNDS, async (err, hash) => {
            if (err) return res.status(401).json({ message: 'Something is Wrong , Please try after some time' })

            userAuthModel.create({ email, password: hash})
                .then(() => res.json({ message: 'Account is Created Successfully' }))
                .catch((err) => {
                    console.log(err)
                    res.status(400).json({ message: 'Something is Wrong , Please try after some time' })
                }
                )

        })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Something is Wrong , Please try after some time' })
    }
}

const userLogin = async (req, res) => {

    const { email, password } = req.body


    console.log(email, password)

    try {

        const correctUser = await userAuthModel.findOne({ email })

        if (correctUser) {
            bcrypt.compare(password, correctUser.password, function (err, result) {

                const token = jwt.sign({ userId: correctUser._id }, process.env.SECRET_KEY);
                // result == true
                if (result) {
                    return res.json({ message: 'Login Successfully', token })
                } else {
                    return res.status(400).json({ message: 'Password is Incorrect' })
                }
            });
        } else {

            return res.status(401).json({ message: 'Mail ID is not exist in our database' })
        }


    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Something is Wrong , Please try after some time' })
    }
}

// <---- I will check after the confirmation ---->

// const googleAuthCallback = (req, res) => {
//     // Redirect user to frontend with the JWT token as a cookie
//     res.cookie('jwt', req.user.token);
//     // res.redirect('http://localhost:3000/harvest/signin');
//     res.send('<script>window.opener.location.href="http://localhost:3000/harvest/signin"; window.close();</script>');

// }


// const getUserDetail = async (req , res) => {

//     try {

//         const isUserValid = await userAuthModel.findOne({
//             $or : [
//                 {oauthid : req.userId},
//                 {id : req.userId}
//             ]
//         })

//         if (isUserValid) {
            
//             return res.json({
//                 avatar : isUserValid.avatar,
//                 email : isUserValid.email
//             })
//         }
        
//     } catch (error) {
//         console.log(error)
//     }
// } 


// <---- I will check after the confirmation ---->


module.exports = { userSignup, userLogin }