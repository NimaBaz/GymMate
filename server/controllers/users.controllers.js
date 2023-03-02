const User = require('../models/users.model');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

/*
! CREATE
*/
module.exports.register = (req, res)=>{
    User.create(req.body)
        .then(user => {
            console.log("Made it to the controller", req.body)
            const userToken = jwt.sign({id: user._id}, process.env.FIRST_SECRET_KEY);
            res.cookie("usertoken", userToken, process.env.FIRST_SECRET_KEY, {httpOnly: true}).json({msg: "success", user:user});
        })
        .catch(err => {
            console.log("in err")
            res.status(400).json(err)
        }); 
}

/*
! READ ALL
*/
module.exports.index = (req, res) => {
    User.find()
    .then(users => res.cookie("test","test", {httpOnly:true}).json(users))
    .catch(err => res.status(400).json(err))
}

/*
! READ ONE
*/

module.exports.login = async(req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if(user === null) {
        return res.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    if(!correctPassword) {
        return res.sendStatus(400);
    }
    const userToken = jwt.sign({id: user._id}, process.env.FIRST_SECRET_KEY);
    res.cookie("usertoken", userToken,  process.env.FIRST_SECRET_KEY, {httpOnly: true}).json({ msg: "success!", user });
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}

module.exports.getUser = (req, res) => {
    const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true})
    User.findOne({_id: decodedJwt.payload.id})
    .then(oneUser => res.json(oneUser))
    .catch(err => res.status(500).json(err))
}

module.exports.cookie =(req, res) => {
    res.cookie("testkey","testvalue", {httpOnly:true}).json("success")
}








// /*
// ! UPDATE
// */
// module.exports.updateUser = (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updateUser => {
//             res.json({ results: updateUser })
//         })
//         .catch((err) => {
//             res.status(400).json(err)
//         });
// }

// /*
// ! DELETE
// */
// module.exports.deleteUser = (req, res) => {
//     User.deleteOne({ _id: req.params.id })
//         .then(deleteUser => {
//             res.json({ result: deleteUser })
//         })
//         .catch((err) => {
//             res.status(400).json(err)
//         });
// }