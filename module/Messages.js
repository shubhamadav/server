const mongoose = require('mongoose')

const chema = mongoose.Schema({
    converstionId:{
        type:String,
    },
    senderId:{
        type:String,
    },
    message:{
        type:String,
    },
})

const Message = mongoose.model('Message' , chema);

module.exports =  Message