const express = require("express");
const app = express();
const dbconn = require("../database/mongodb");
const Transactions = dbconn.Transactions;


var all_transactions = (req,res) =>{
    Transactions.find().then(results =>{
       res.status(200).send({
           success: true,
           data: results,
           count: results.length
       });
    }).catch(err =>{
        res.status(500).json({
            success: false,
            data: [],
            error: err
        })
    })
}

var add_transaction = (req,res) =>{
    const {text,value} = req.body;
    console.log(req.body);
    var transaction = new Transactions({text,value});
    transaction.save().then(saved_transaction =>{
        res.status(200).json({
            success:true,
            data:saved_transaction,
        })
    }).catch(err =>{
        res.status(500).json({
            success: false,
            data: [],
            error: err
        });
    });
}

var delete_transaction = (req,res) =>{
    var id = req.params.id;
    console.log(id);
    Transactions.findOneAndDelete(id).then(deleted =>{
        console.log("deleted");
        res.status(200).json({
            success: true,
            data: deleted,
        });
    }).catch(err =>{
        res.status(500).json({
            success: false,
            data: [],
            error: err
        });
    });
}

module.exports = {
    all_transactions:all_transactions,
    add_transaction:add_transaction,
    delete_transaction:delete_transaction
}