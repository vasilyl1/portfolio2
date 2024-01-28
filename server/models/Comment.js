const { Schema, model } = require('mongoose');

const  commentSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: 'Email address is required',
            trim: true
        },
        message: {
            type: String,
            required: 'Message is required',
            trim: true
        },
    },
);

const Comment = model('Comment', commentSchema);

module.exports = {Comment};