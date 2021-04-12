const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    titles: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Posts", postSchema)