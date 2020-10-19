import React from 'react'
import {delete_transaction} from "./actions";
import {useDispatch} from "react-redux";

const Transaction = ({transaction}) => {
    const dispatch = useDispatch();
    return (
        <li className={transaction.value > 0 ? 'transaction plus':'transaction minus'}>
            <span className="transaction_title"><i onClick={() => dispatch(delete_transaction(transaction._id))} className="fas fa-times delete-btn"></i> &nbsp; {transaction.text}</span>
            <span className="transaction_value">Rs. {transaction.value}</span>
        </li>
    )
}

export default Transaction
