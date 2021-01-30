const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
        menu_name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 45,
        },

    }, {
        timestamps: {
            createdAt: "CrtAt",
            updatedAt: "UrtAt",
        }
    }

)

module.exports = mongoose.model('Menu', menuSchema)