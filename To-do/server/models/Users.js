const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: "String",
        require: true,
    },
    username: {
        type: "String",
        require: true,
    },
    password: {
        type: "String",
        require: true,
    },
    items: {
        type: "Array",
        require: true,
    }
});

module.exports = mongoose.model('User', userSchema);