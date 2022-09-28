const { Schema, model } = require('mongoose');
//const dateFormat = require('../utils/dateFormat');

const cardSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        cardId: {
            type: String,
            required: true
        },
        question: {
            type: String
        },
        answer: {
            type: String
        },
        category: {
            type: String
        },
        createdBy: {
            type: String
        },
        difficulty: {
            type: Int
        },
        title: {
            type: String,
            required: true
        }
    }
)

module.exports = Card;