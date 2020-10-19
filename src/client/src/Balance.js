import React from 'react'
import {useSelector} from 'react-redux';

const Balance = () => {
    const state = useSelector(state => state.transactions);
    console.log("state in balance",state);
    var total =0;
    var income = 0;
    var expenditure = 0;
    state.map(transaction =>{
        total += transaction.value;
        if(transaction.value > 0){
            income += transaction.value;
        }
        else if(transaction.value < 0){
            expenditure += transaction.value;
        }
        return income;
    })
    return (
        <div className="balance">
            <div className="total_balance">
                <h4> Total Balance : <u>Rs. {total}</u> </h4>
            </div>
            <div className="col1">
                <h3>Saving</h3>
                <h4>Rs. {income}</h4>
            </div>
            <div className="col2">
                <h3>Expenditure</h3>
                <h4>Rs. {expenditure}</h4>
            </div>
        </div>
    )
}

export default Balance
