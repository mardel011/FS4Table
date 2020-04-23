const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema({
    //logType: {type: String, require:true},
    username: {type:String, require:true},
    message: {type: String, require:true},
    // userId: {type: Schema.Types.ObjectId, ref: 'Chat', require:true},
    date: {type: Date, default: Date.now}
}, {
        collection: 'messages'
})

const chatHistory = mongoose.model('ChatHistory', chatHistorySchema, 'ChatHistory');
module.exports = chatHistory


/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }
}, {
        collection: 'users'
    })

module.exports = mongoose.model('User', userSchema)*/