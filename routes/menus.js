const router = require('express').Router()
const { authVerify } = require('../middleware/authVerify')
    // const { bookValidator } = require('../middleware/books')

const {
    createMenu,

} = require('../controllers/menus')


router.post('/menus', authVerify, createMenu)
    // router.patch('/books/:id', updateBook)
    // router.get('/books', getBook)
    // router.delete('/books/:id', deleteBook)


module.exports = router