const { Schema, model } = require('mongoose');
//const dateFormat = require('../utils/dateFormat');

const cardSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now,
            //get: timestamp => dateFormat(timestamp)
        },
        question: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        createdBy: {
            type: String,
            required: true
        },
        difficulty: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
)

const Card = model('Card', cardSchema);

module.exports = Card;