const UserController = require('../controllers/users.controllers')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {

    /*
    ! CREATE
    */
    app.post(`/api/register`, UserController.register)

    /*
    ! READ ONE
    */
    app.get(`/api/login`, UserController.login)
    app.get(`/api/logout`, UserController.logout)
    app.get(`/api/cookie`, UserController.cookie)
    app.get(`/api/getUser`, UserController.getUser)

    /*
    ! READ ALL
    */
    app.get(`/api/allUsers`, authenticate, UserController.index)




    // /*
    // ! UPDATE
    // */
    // app.put("/api/users/update/:id", UserController.updateUser)

    // /*
    // ! DELETE
    // */
    // app.delete("/api/users/delete/:id", UserController.deleteUser)

}