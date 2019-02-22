const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken') 
const passport = require('passport') 
const UserSchema = require('../../models/userModel')

// Registering a user
router.post('/register/form', (req, res) => {
    const { name, email, password } = req.body 
    const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
    })
    UserSchema.findOne({ email })
        .then((user) => {
            if(user){
                return res.status(400).json({ err: 'Email already exists'})
            }

            const newUser = new UserSchema({
                name,
                email,
                password,
                avatar
            })

            bcrypt.genSalt(10, (err, salt) => {
                if(err){ return res.status(400).json(err)}
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) { return res.status(400).json(err) }
                    newUser.password = hash 
                    newUser.save()
                        .then((user) => { res.json(user) })
                })
            })
        })
        .catch((err) => { res.status(400).json(err) })
})
// Route for logging in a user
router.post('/login/form', (req, res) => {
    const { email, password } = req.body

    UserSchema.findOne({ email })
        .then((user) => {
            if(!user){
                return res.status(400).json({ err: "User not found"})
            }
            bcrypt.compare(password, user.password)
                .then((isMatch) => {
                    if(!isMatch){}
                    
                    const payload = {
                        id: user.id,
                        name: user.name,
                        avatar: user.avatar
                    }
                    jwt.sign(payload, 'secret', { expiresIn: 3600 }, (err, token) => {
                        if(err){ 
                            console.error('There is an error with the token', err)
                        }else{
                            res.json({
                                success: true,
                                token: `Bearer ${token}`
                            })
                        }
                    })

                })
                .catch((err) => { return res.status(400).json({ err: 'Incorrect Password'}) })

        })
        .catch((err) => { res.status(400).json(err) })
})
// 
// router.get('/', (req, res) => {
//     const data = {
//         data1: 'sjkgfjkshgfljhagslfdjkg',
//         data2: CLIENT_ID,
//         data3: CLIENT_SECRET,
//         data4: redirect_uri,
//     }
//     res.status(200).json(data)
// })

module.exports = router 