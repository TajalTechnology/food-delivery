const router = require('express').Router()
const { userValidator } = require('../validation/users')

const {
    createUser,
    updateUser,
    userDelete,
    logIn

} = require('../controllers/users')

router.post('/user', userValidator, createUser)
router.post('/log-in', userValidator, logIn)
router.put('/user/:id', updateUser)
router.delete('/user/:id', userDelete)


module.exports = router