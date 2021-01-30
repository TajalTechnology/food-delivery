const Menu = require('../models/menus')
const { validationResult } = require('express-validator')

module.exports = {

    createMenu: (req, res) => {

        let { menu_name } = req.body
        let menu = new Menu({ menu_name })

        //error show
        // let errors = validationResult(req)
        // const formatter = (error) => error.msg
        // if (!errors.isEmpty()) {
        //     return res.status(404).send({
        //         message: errors.formatWith(formatter).mapped(),
        //     });
        // }

        menu.save()
            .then(book => {
                res.status(201).json({ book })
            })
            .catch(err => {
                res.status(500).json({
                    "message": err.message || "Some error occurred while post a book",
                })
            })

    },

    updateBook: (req, res) => {

        let { menu_name } = req.body
        let { id } = req.params

        //error show
        // let errors = validationResult(req)
        // const formatter = (error) => error.msg
        // if (!errors.isEmpty()) {
        //     return res.status(404).send({
        //         message: errors.formatWith(formatter).mapped(),
        //     });
        // }

        Menu.findOneAndUpdate({ _id: id }, {
                $set: {
                    menu_name
                }
            }, { new: true })
            .then(book => {
                res.status(202).json({ book })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message || "Some error occurred while updating books info"
                })
            })

    },

    // getBook: async(req, res) => {

    //     let currentPage = parseInt(req.query.page) || 1
    //     let itemPerPage = 2
    //     let totalBooks = await Book.countDocuments()
    //     let totalPage = Math.ceil(totalBooks / itemPerPage)

    //     Book.find()
    //         .populate('author')
    //         .skip((itemPerPage * currentPage) - itemPerPage)
    //         .limit(itemPerPage)
    //         // .exec()
    //         .then(books => {
    //             if (books) {
    //                 res.status(200).json({
    //                     "pagination": {
    //                         totalBooks,
    //                         currentPage,
    //                         totalPage
    //                     },
    //                     books
    //                 })
    //             } else {
    //                 return res.status(404).send({
    //                     message: "Books not found ",
    //                 });
    //             }

    //         })
    //         .catch(err => {
    //             res.status(500).json({
    //                 message: err.message || "Some error occurred"
    //             })
    //         })

    // },

    // deleteBook: (req, res) => {

    //     let { id } = req.params

    //     Book.findOneAndDelete({ _id: id })
    //         .then(books => {
    //             if (!books) {
    //                 return res.status(404).send({
    //                     message: "Book not found ",
    //                 });
    //             } else {
    //                 res.status(200).json({ message: 'Book deleted successfully' })
    //             }
    //         })
    //         .catch(err => {
    //             res.status(500).json({
    //                 message: err.message || "Some error occurred"
    //             })
    //         })

    // },
}