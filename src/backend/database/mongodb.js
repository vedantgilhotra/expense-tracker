const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: "./src/config/config.env"});
const db = mongoose.connect(process.env.MONGOURI,{ useNewUrlParser: true, useUnifiedTopology: true });

const schema = mongoose.Schema;

const transaction_schema = new schema({
    text:{
        type:String,
        trim:true,
        required:[true,"Please provide with text in input field"]
    },
    value:{
        type:Number,
        required:[true,"Please provide a value to the transation"]
    }
});

module.exports = {
    Transactions:mongoose.model('transaction',transaction_schema)
}